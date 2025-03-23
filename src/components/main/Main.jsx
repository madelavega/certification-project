import { Route, Routes } from 'react-router';
import HomePage from '../homePage';
import BookingPage, {ConfirmedBooking} from '../booking';

const Nav = () => {
    return <main className='main'>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking">
                <Route index element={<BookingPage />} />
                <Route path="confirmation" element={<ConfirmedBooking />} />
            </Route>
        </Routes>
    </main>
}

export default Nav;