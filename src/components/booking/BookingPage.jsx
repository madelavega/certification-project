import { useReducer, useEffect } from 'react';
import * as Yup from 'yup';
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import BookingForm from './BookingForm';
import { submitAPI } from '../../api';
import useLocalStorage from '../../hooks/useLocalStorage';
import availableTimesReducer from './reducer';
import "./booking.css";

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

    const onFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit(values);
    }

    const { getFieldProps, values, errors, touched, handleSubmit } = useFormik({
        initialValues: {
            guests: '',
            time: '',
            date: '',
            ocassion: ''
        },
        onSubmit,
        validationSchema: Yup.object({
            guests: Yup.number().required("Guests number is required").min(1),
            time: Yup.string().required("Time is required"),
            date: Yup.date().required("Booking date is required").min(new Date(), "Please, select a future date."),
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


    return (
        <section className="booking">
            <div className="booking-header">
                <h1>Reservation</h1>
                <p>Please, fill out the following form regarding your reservation.</p>

            </div>
            <div className="form-container">
                <BookingForm
                    availableTimes={availableTimes}
                    getFieldProps={getFieldProps}
                    values={values}
                    errors={errors}
                    touched={touched}
                />
                <div className="image"/>
            </div>

            <button className="form-submit" type="submit" aria-label="On Click" disabled={Object.keys(errors).length || !Object.keys(touched).length} width="full" onClick={onFormSubmit}>
                Make Your Reservation
            </button>
        </section>
    )
}

export default BookingPage;