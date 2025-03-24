import SpecialsList from './SpecialsList';
import './specials.css';

const Specials = () => {
    return <section className="specials">
        <h1>This weeks specials!</h1>
        <button className="online-menu-btn">Online Menu</button>
        <SpecialsList/>
    </section>
}

export default Specials;