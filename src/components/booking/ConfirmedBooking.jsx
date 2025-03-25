import useLocalStorage from '../../hooks/useLocalStorage';
import './confirmedBooking.css';

const ConfirmedBooking = () => {
    const [bookingData] = useLocalStorage('bookingData', {});

    if (bookingData) {
        const { date, guests, time, ocassion } = bookingData;
        return (
            <section className="confirmed-reservation">
                <h1>Confirmed!</h1>
                <h2>{guests} dinners for {date} at {time} to celebrate the {ocassion}</h2>
            </section>
        )
    } else {
        return (
            <section className="confirmed-reservation">
                <h1>Confirmed</h1>;
            </section>
        )
    }
}

export default ConfirmedBooking;