import { Link } from "react-router";

const SpecialsCard = ({ image, title, price, description }) => {
    return <li>
        <div className="food-image">
            <img src={image} title={title} alt={title}></img>
        </div>
        <section className="detail">
            <h1>{title}</h1>
            <span className="price">{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
                price,
            )}</span>
            <p>{description}</p>
            <Link to="/order">Order a delivery</Link>
        </section>
    </li>
}

export default SpecialsCard;