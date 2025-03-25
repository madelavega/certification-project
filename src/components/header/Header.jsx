import { ReactComponent as Logo } from './Logo.svg';
import { ReactComponent as Kebab } from './kebab.svg';

const Header = ({setToggleNav}) => {
    return <header className="header">
        <Kebab className="kebab-ico" aria-label="show/close the menu"onClick={() => {
            setToggleNav(prev => !prev);
        }}/>
        <Logo className="logo"/>
        </header>
}

export default Header;