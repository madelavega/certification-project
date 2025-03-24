import BookingButton from '../booking/CallToAction';
import './chicago.css';

const Chicago = () => {
    return <div className="chicago">
        <section className="about-us">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
                We are a family owned mediterranean restaurant, focused on traditional recipes server with a modern twist.
            </p>
            <BookingButton />
        </section>
        <div className="image"/>
    </div>

}

export default Chicago;