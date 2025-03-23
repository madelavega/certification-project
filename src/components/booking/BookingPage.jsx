import { useState, useReducer, useEffect } from 'react';
import { useNavigate } from "react-router";
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from '../../api';
import useLocalStorage from '../../hooks/useLocalStorage';

const BookingPage = () => {
    const [date, setDate] = useState(new Date());
    const [guests, setGuests] = useState();
    const [time, setTime] = useState();
    const [ocassion, setOcassion] = useState('Birthday');
    const navigate = useNavigate();
    const [, setBookingData] = useLocalStorage('bookingData', {});

    const submitForm = () => {
        const formData = { date, guests, time, ocassion }
        const submitCallback = submitAPI();
        
        if (submitCallback) {
            setBookingData(formData);
            navigate('confirmation');
        }
    }

    const onChange = (stateSetter) => ({ target: { value } }) => {
        stateSetter(value);
    }

    const [availableTimes, dispatch] = useReducer((availableTimes, action) => {
        const actions = {
            updateTimes: () => {
                const { payload: date } = action;
                if (!date) return availableTimes;
                return fetchAPI(new Date(date));
            },
            initializeTimes: () => {
                return fetchAPI(new Date());
            }
        }
        return actions[action.type]();

    }, []);

    useEffect(() => {
        dispatch({ type: 'updateTimes', payload: date })
    }, [date]);

    useEffect(() => {
        dispatch({ type: 'initializeTimes' })
    }, []);


    return <BookingForm
        onChange={onChange}
        date={date}
        time={time}
        guests={guests}
        ocassion={ocassion}
        setDate={setDate}
        setGuests={setGuests}
        setOcassion={setOcassion}
        setTime={setTime}
        availableTimes={availableTimes}
        onSubmit={submitForm}
    />
}

export default BookingPage;