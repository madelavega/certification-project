import SpecialsCard from "./SpecialCard";
import specials from './specials_data.json';
const SpecialsList = () => {
    return <ul>
        {
            specials.map((special) => <SpecialsCard key={special.title} {...special} />)
        }
    </ul>
}

export default SpecialsList;