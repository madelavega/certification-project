import Chicago from '../chicago';
import Specials from '../specials';
import './homepage.css';

const HomePage = () => {
    return <div className="homepage">
        <Chicago />
        <Specials/>
    </div>
}

export default HomePage;