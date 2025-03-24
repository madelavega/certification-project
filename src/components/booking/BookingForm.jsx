import {
    Button,
    Field,
    Input,
    NativeSelect
} from "@chakra-ui/react";

const BookingForm = ({
    availableTimes,
    onSubmit,
    getFieldProps,
    values,
    errors,
    touched
}) => {
    const onFormSubmit = (e) => {
        e.preventDefault();
        debugger
        onSubmit(values);
    }

    return (
        <form>
            <Field.Root invalid={!!errors.date && touched.date}>
                <Field.Label htmlFor="res-date">Choose date</Field.Label>
                <Input
                    id="res-date"
                    name="date"
                    type="date"
                    value={values.date}
                    {...getFieldProps("date")}
                />
            <Field.ErrorText>{errors.date}</Field.ErrorText>
            </Field.Root>
            <Field.Root invalid={!!errors.time && touched.time}>
                <Field.Label htmlFor="res-time">Choose time</Field.Label>
                <NativeSelect.Root>
                    <NativeSelect.Field  placeholder="Select the time" id="res-time" name="time" {...getFieldProps("time")} value={values.time} >
                        {
                            availableTimes.map(availableTime => <option key={availableTime} value={availableTime}>{availableTime}</option>)
                        }
                    </NativeSelect.Field>
                </NativeSelect.Root>
            <Field.ErrorText>{errors.time}</Field.ErrorText>
            </Field.Root>
            <Field.Root invalid={errors.guests && touched.guests}>
                <Field.Label htmlFor="guests">Number of guests</Field.Label>
                <Input
                    id="guests"
                    type="number"
                    min="1"
                    name="guests"
                    value={values.guests}
                    {...getFieldProps("guests")}
                />
            <Field.ErrorText name="guests">{errors.guests}</Field.ErrorText>
            </Field.Root>
            <Field.Root invalid={!!errors.ocassion && touched.ocassion}>
                <Field.Label htmlFor="ocassion">Ocassion</Field.Label>
                <NativeSelect.Root>
                    <NativeSelect.Field placeholder="Select ocassion" id="ocassion" name="ocassion" {...getFieldProps("ocassion")} value={values.ocassion} >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </NativeSelect.Field>
                </NativeSelect.Root>
            <Field.ErrorText>{errors.ocassion}</Field.ErrorText>
            </Field.Root>
            <Button type="submit" aria-label="On Click" disabled={Object.keys(errors).length || !Object.keys(touched).length} width="full" onClick={onFormSubmit}>
                Make Your reservation
            </Button>
        </form>
    )
}

export default BookingForm;