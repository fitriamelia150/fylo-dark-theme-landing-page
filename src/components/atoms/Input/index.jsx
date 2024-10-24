import PropTypes from "prop-types"

const Input = ({label, placeholder}) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label className="font-semibold text-sm">{label}</label>
            <input className="h-12 px-5 py-2 rounded-full text-xs w-full" placeholder={placeholder} />
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string
}

export default Input