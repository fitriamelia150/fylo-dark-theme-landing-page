import logo from './../../../assets/logo.svg'
import iconLocation from './../../../assets/icons/icon-location.svg'
import iconPhone from './../../../assets/icons/icon-phone.svg'
import iconEmail from './../../../assets/icons/icon-email.svg'
import iconFacebook from './../../../assets/icons/icons8-facebook.svg'
import iconTwitter from './../../../assets/icons/icons8-twitter.svg'
import iconInstagram from './../../../assets/icons/icons8-instagram.svg'

const Footer = () =>{
    return(
        <div className="text-neutral-white bg-primary-dark-blue-footer-background flex flex-col gap-10 px-10 pt-[300px]">
            <img src={logo} alt="icon-logo" className='w-48'/>
            <div className=" flex flex-col gap-5">
                <div className="flex items-center gap-5">
                    <img src={iconLocation} alt="icon-location" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className="flex items-center gap-5">
                    <img src={iconPhone} alt="icon-phone" />
                    <p>+1-543-123-4567</p>
                </div>
                <div className="flex items-center gap-5">
                    <img src={iconEmail} alt="icon-email" />
                    <p>example@fylo.com</p>
                </div>
            </div>

            <div className="">
                <h1>About Us</h1>
                <p>Jobs</p>
                <p>Press</p>
                <p>Blog</p>
            </div>

            <div className="">
                <h1>Contact Us</h1>
                <p>Terms</p>
                <p>Privacy</p>
            </div>

            <div className="flex items-center justify-center gap-5">
                <img src={iconFacebook} alt="icon-facebook" className="border-white border-[1px] rounded-full p-[0.25rem] w-8"/>
                <img src={iconTwitter} alt="icon-twitter" className="border-white border-[1px] rounded-full p-[0.25rem] w-8"/>
                <img src={iconInstagram} alt="icon-instagram" className="border-white border-[1px] rounded-full p-[0.25rem] w-8"/>
            </div>
        </div>
    )
}

export default Footer