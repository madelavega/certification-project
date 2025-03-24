import { useReducer, useEffect } from 'react';
import * as Yup from 'yup';
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import BookingForm from './BookingForm';
import { submitAPI } from '../../api';
import useLocalStorage from '../../hooks/useLocalStorage';
import availableTimesReducer from './reducer';

const BookingPage = () => {
    const navigate = useNavigate();
    const [, setBookingData] = useLocalStorage('bookingData', {});

    const onSubmit = (data) => {
        const submitCallback = submitAPI();

        if (submitCallback) {
            setBookingData(data);
            navigate('confirmation');
        }
    }

    const { getFieldProps, values, errors, touched, handleSubmit } = useFormik({
        initialValues: {
            guests: '',
            time: '',
            date: new Date(),
            ocassion: ''
        },
        onSubmit,
        validationSchema: Yup.object({
            guests: Yup.number().required("Guests number is required").min(1),
            time: Yup.string().required("Time is required"),
            date: Yup.date().required("Booking date is required"),
            ocassion: Yup.string().required("Ocassion is Required"),
        }),
    });

    const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);

    useEffect(() => {
        dispatch({ type: 'updateTimes', payload: values.date })
    }, [values.date]);

    useEffect(() => {
        dispatch({ type: 'initializeTimes' })
    }, []);


    return <BookingForm
        availableTimes={availableTimes}
        onSubmit={handleSubmit}
        getFieldProps={getFieldProps}
        values={values}
        errors={errors}
        touched={touched}
    />
}

export default BookingPage;