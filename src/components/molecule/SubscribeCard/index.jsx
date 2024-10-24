import PropTypes from "prop-types"
import { Button, Input } from "../../atoms"

const SubscribeCard = ({highlight, desc, button}) => {
    return (
        <div className="bg-primary-dark-blue-email py-10 px-[17px] flex flex-col gap-5 items-center">
            <h1 className="font-bold text-xl">{highlight}</h1>
            <p className="text-center text-sm">{desc}</p>
            <Input placeholder="email.examle.com"/>
            <Button label={button} size="w-full"/>
        </div>
    )
}

SubscribeCard.propTypes = {
    highlight: PropTypes.string,
    desc: PropTypes.string,
    button: PropTypes.string,
}

export default SubscribeCard