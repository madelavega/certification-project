import { useNavigate } from "react-router";

const CallToAction = ()=> {
    const navigate = useNavigate();

    const gotoBooking = () => {
        navigate('/booking');
    }
    return <button className="goto-booking" onClick={gotoBooking}>Reserve a Table</button>
}
export default CallToAction;