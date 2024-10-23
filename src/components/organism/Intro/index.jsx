import PropTypes from 'prop-types'
import {Button} from '../../atoms'

import bgCurveMobile from './../../../assets/images/bg-curvy-mobile.svg'
// import bgCurveDesktop from './../../../assets/images/bg-curvy-desktop.svg'


const Intro = ({image}) =>{
    return (
        <div className="part-1  flex flex-col gap-5 items-center">
            <div className="bg-primary-dark-blue-email px-10 relative w-[100%] h-[400px] box-border">
                <img src={image} alt="image-1" className='z-10 absolute w-[300px] translate-y-[4.5rem]'/>
                <h1 className='font-semibold text-xl text-center z-20 translate-y-[4.5rem] absolute'>All your files in one secure location, accessible anywhere.</h1>
                <img src={bgCurveMobile} alt="" className=" z-0 -translate-y-[16.5rem] -translate-x-10 absolute"/>
            </div>
            
            <div className="bg-primary-dark-blue-main-background flex flex-col gap-5 items-center px-10">
                <p className='text-center text-sm'>Fylo stores all your most important files in one secure location. Access them wherever 
                you need, share and collaborate with friends family, and co-workers.</p>
                <Button label="Get Started" size='70%'/>
            </div>
        </div>
    )
}

Intro.propTypes = {
    image: PropTypes.string
}

export default Intro
