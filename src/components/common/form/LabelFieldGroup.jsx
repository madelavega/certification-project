import './labelFieldGroup.css';

const classNames = {
    top: 'label-align-top',
    left: 'label-align-left'
}
const LabelFieldGroup = ({
    children,
    error,
    labelALign = 'top',
    required = false
}) => {
    return <div className={`label-field-group ${classNames[labelALign]} ${!!error ? 'invalid' : ''} ${required && 'required'}`}>
        {children}
        <span className="error">{error}</span>
    </div>

}

export default LabelFieldGroup;