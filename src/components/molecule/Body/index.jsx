import {Button} from './../../atoms'

import image1 from './../../../assets/images/illustration-intro.png'



const Body = () =>{
    return(
        <div className="text-neutral-white px-10">
            <div className="part-1 flex flex-col gap-5 items-center">
                <img src={image1} alt="image-1" />
                <h1 className='font-semibold text-xl text-center'>All your files in one secure location, accessible anywhere.</h1>
                <p className='text-center text-sm'>Fylo stores all your most important files in one secure location. Access them wherever 
                you need, share and collaborate with friends family, and co-workers.</p>
                <Button label="Get Started" size='70%'/>
            </div>
        </div>
    )
}

export default Body