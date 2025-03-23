import useLocalStorage from '../../hooks/useLocalStorage';

const ConfirmedBooking = () => {
    const [bookingData] = useLocalStorage('bookingData', {});

    if (bookingData) {
        const { date, guests, time, ocassion } = bookingData;
        return <span>Confirmed {guests} dinners for {date} at {time} to celebrate the {ocassion}</span>;
    } else {
        return <span>Confirmed</span>;
    }
}

export default ConfirmedBooking;