import PropTypes from "prop-types"

const Button = ({label}) => {
    return (
        <button className="bg-accent-cyan h-12 text-neutral-50 rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue w-[70%]">{label}</button>
    )
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
}

export default Button