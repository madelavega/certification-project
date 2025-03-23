const BookingForm = ({
    onChange,
    guests,
    time,
    date,
    ocassion,
    setDate,
    setTime,
    setGuests,
    setOcassion,
    availableTimes,
    onSubmit
}) => {

    return (
        <form onSubmit={onSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
            <label htmlFor="res-date">Choose date</label>
            <input value={date} onChange={onChange(setDate)} type="date" id="res-date" />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={onChange(setTime)}>
                {
                    availableTimes.map(availableTime => <option key={availableTime} value={availableTime}>{availableTime}</option>)
                }
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input value={guests} onChange={onChange(setGuests)} type="number" placeholder="1" min="1" max="10" id="guests" />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={ocassion} onChange={onChange(setOcassion)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    )
}

export default BookingForm;