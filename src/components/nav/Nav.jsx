import { Link } from "react-router";

const Nav = () => {
    return <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/booking">Reservations</Link>
        <Link to="/order">Order Online</Link>
        <Link to="/Login">Login</Link>
    </nav>
}

export default Nav;