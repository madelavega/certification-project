import LabelFieldGroup from "../common/form/LabelFieldGroup";
import Select from "../common/form/Select";

const BookingForm = ({
    availableTimes,
    getFieldProps,
    values,
    errors,
    touched
}) => {

    return (
        <form className="booking-form">
            <LabelFieldGroup required error={touched.date && errors.date}>
                <label htmlFor="res-date">Choose date</label>
                <input
                    id="res-date"
                    name="date"
                    type="date"
                    min={new Date().toISOString().substring(0, 10)}
                    value={values.date}
                    {...getFieldProps("date")}
                />
            </LabelFieldGroup>
            <LabelFieldGroup required error={touched.time && errors.time}>
                <label htmlFor="res-time">Choose time</label>
                <Select id="res-time" name="time" {...getFieldProps("time")} value={values.time} >
                    <option disabled value=''>Select one of availables...</option>
                    {
                        availableTimes.map(availableTime => <option key={availableTime} value={availableTime}>{availableTime}</option>)
                    }
                </Select>
            </LabelFieldGroup>
            <LabelFieldGroup required error={touched.guests && errors.guests}>
                <label htmlFor="guests">Number of guests</label>
                <input
                    id="guests"
                    type="number"
                    min="1"
                    name="guests"
                    value={values.guests}
                    {...getFieldProps("guests")}
                />
            </LabelFieldGroup>
            <LabelFieldGroup required error={touched.ocassion && errors.ocassion}>
                <label htmlFor="ocassion">Ocassion</label>
                <Select id="ocassion" name="ocassion" {...getFieldProps("ocassion")} value={values.ocassion} >
                    <option key="empty_ocassion" value='' disabled>Select the ocassion type</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </Select>
            </LabelFieldGroup>
        </form>
    )
}

export default BookingForm;