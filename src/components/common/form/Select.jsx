import './select.css';

export const Select = ({children, ...rest}) => {
    return <div className="select"><select className="select" {...rest}>{children}</select></div>
}

export default Select;