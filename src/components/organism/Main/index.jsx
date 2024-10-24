import { TestimoniCard, SubscribeCard } from '../../molecule'

import image2 from './../../../assets/images/illustration-stay-productive.png'
import profile1 from './../../../assets/images/profile-1.jpg'
import profile2 from './../../../assets/images/profile-2.jpg'
import profile3 from './../../../assets/images/profile-3.jpg'
import icon1 from './../../../assets/icons/icon-access-anywhere.svg'
import icon2 from './../../../assets/icons/icon-security.svg'
import icon3 from './../../../assets/icons/icon-collaboration.svg'
import icon4 from './../../../assets/icons/icon-any-file.svg'
import icon5 from './../../../assets/icons/icon-arrow.svg'
import bgQuotes from './../../../assets/images/bg-quotes.png'

const Main = () => {
    return (
        <div className="flex flex-col">
            <div className="part-2 flex flex-col gap-28 px-10 md:flex-row md:flex-wrap md:px-60">
                <div className="part-2-section">
                    <img src={icon1} alt="access-image" />
                    <h1>Access your files, anywhere</h1>
                    <p>The ability to use a smartphone, tablet, or computer to access your account means your 
                    files follow you everywhere.</p>
                </div>

                <div className="part-2-section">
                    <img src={icon2} alt="security-image" />
                    <h1>Security you can trust</h1>
                    <p>2-factor authentication and user-controlled encryption are just a couple of the security 
                    features we allow to help secure your files.</p>
                </div>

                <div className="part-2-section">
                    <img src={icon3} alt="collaboration-image" />
                    <h1>Real-time collaboration</h1>
                    <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                </div>

                <div className="part-2-section">
                    <img src={icon4} alt="store-image" />
                    <h1>Store any type of file</h1>
                    <p>Whether you&apos;re sharing holidays photos or work documents, Fylo has you covered allowing for all 
                    file types to be securely stored and shared.</p>
                </div>
            </div>

            <div className="part-3 flex flex-col gap-5 px-8 pt-40">
                <img src={image2} alt="image-3" />
                <h1 className="text-lg font-bold mt-10">Stay productive, wherever you are</h1>
                <p className="text-sm">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                <p className="text-sm">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                <div className="text-sm flex justify-between items-center border-b-[1px] border-b-accent-cyan mb-1 w-[53%] text-accent-cyan">
                    <a href="">See how Fylo works</a>
                    <img src={icon5} alt="arrow-icon" />
                </div>
            </div>

            <div className="part-4 flex flex-col gap-7 px-16 pt-40">
                <img src={bgQuotes} alt="" className='w-5 translate-y-7'/>
                <TestimoniCard 
                    desc="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                    user="Satish Patel"
                    position="Founder & CEO, Huddle"
                    image={profile1}
                />

                <TestimoniCard 
                    desc="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                    user="Bruce McKenzie"
                    position="Founder & CEO, Huddle"
                    image={profile2}
                />

                <TestimoniCard 
                    desc="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                    user="Iva Boyd"
                    position="Founder & CEO, Huddle"
                    image={profile3}
                />
            </div>

            <div className="part-4 px-5 translate-y-40">
                <SubscribeCard 
                    highlight="Get early access today"
                    desc="It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you."
                    button="Get Started For Free"
                />
            </div>
        </div>
    )
}

export default Main