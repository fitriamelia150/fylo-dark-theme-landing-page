// import Logo from './../../../assets'
import Logo from './../../../assets/logo.svg'

const Navbar = () =>{
    return(
        <div className="flex justify-between items-center py-6 px-5 bg-primary-dark-blue-email">
            <div className="w-[100px]">
                <img src={Logo} alt="logo" className=""/>
            </div>
        
            <div className="text-neutral-white flex gap-3 capitalize font-light text-xs">
                <p>feature</p>
                <p>team</p>
                <p>sign in</p>
            </div>
        </div>
    )
}

export default Navbar