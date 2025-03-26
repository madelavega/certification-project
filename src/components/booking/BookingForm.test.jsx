import { render, screen, cleanup } from "@testing-library/react";
import BookingForm from './BookingForm';

beforeAll(() => {
    cleanup();
});

const defaultProps = {
    touched: {},
    errors: {},
    values: {},
    getFieldProps: () => { },
    availableTimes: ['17:00', '18:00']
}

describe('BookingForm', () => {
    it('Renders the component', () => {
        render(<BookingForm {...defaultProps} />);
    });
    it('Renders all the fields', () => {
        render(<BookingForm {...defaultProps} />);
        expect(screen.getByLabelText(/Choose date/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Choose time/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Number of guests/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Ocassion/)).toBeInTheDocument();
    });
    it('Not render any error by default', () => {
        const propsWithErrors = {
            ...defaultProps,
            touched: {},
            errors: {
                date: "invalid date",
                time: 'you must select the time',
                guests: 'you must select number of guests',
                ocassion: 'you must select the ocassion'

            }
        }
        render(<BookingForm {...propsWithErrors} />);
        expect(screen.queryByText(propsWithErrors.errors.date)).not.toBeInTheDocument();
        expect(screen.queryByText(propsWithErrors.errors.time)).not.toBeInTheDocument();
        expect(screen.queryByText(propsWithErrors.errors.guests)).not.toBeInTheDocument();
        expect(screen.queryByText(propsWithErrors.errors.ocassion)).not.toBeInTheDocument();
    });
    it('Renders all errors when the elements are touched', () => {
        const propsWithErrors = {
            ...defaultProps,
            touched: { date: true, time: true, guests: true, ocassion: true },
            errors: {
                date: "invalid date",
                time: 'you must select the time',
                guests: 'you must select number of guests',
                ocassion: 'you must select the ocassion'

            }
        }
        render(<BookingForm {...propsWithErrors} />);
        expect(screen.queryByText(propsWithErrors.errors.date)).toBeInTheDocument();
        expect(screen.queryByText(propsWithErrors.errors.time)).toBeInTheDocument();
        expect(screen.queryByText(propsWithErrors.errors.guests)).toBeInTheDocument();
        expect(screen.queryByText(propsWithErrors.errors.ocassion)).toBeInTheDocument();
    });
    it('Displays the available times', () => {

        render(<BookingForm {...defaultProps} />);
        const timeSelector = screen.queryByLabelText(/Choose time/);
        timeSelector.click();
        defaultProps.availableTimes.forEach((time) => {
            expect(screen.queryByText(time)).toBeInTheDocument();
        })

    });
})