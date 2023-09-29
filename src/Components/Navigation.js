import { React, useContext } from 'react';
import Contact_btn from '../Components/Button/Contact_btn';
import logo from '../img/logo.svg';
import mobile_logo from '../img/IconLogo.svg';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { AppContext } from '../App';


// function Navigation({ handleToggle, setToggle, toggle }) {
function Navigation() {
    const navs = ["Home", "About", "Pages", "Blog"]
    const { toggle, setToggle, handleToggle } = useContext(AppContext);
    return (
        < nav className='absolute right-0 left-0 z-50 container' >

            {/* Small screen navigation */}
            <div className="mobile_view container lg:hidden flex justify-between items-center relative mt-8 rounded-[5px] h-[70px] bg-white">
                <div className="logo ">
                    <img className='w-[50px] cursor-pointer' src={mobile_logo} alt="" />
                </div>

                <ul className={toggle ? 'flex flex-col gap-y-4 text-white absolute top-24 left-0 bg-primary w-[100%] container py-4' : 'hidden'}>
                    {navs.map((nav, index) => (
                        <li key={index} className='hover:text-primary'><a href="">{nav}</a></li>
                    ))}
                </ul>
                <div className="hamb">
                    {!toggle ?
                        <Bars3Icon onClick={handleToggle} className='w-9' /> :
                        <XMarkIcon onClick={handleToggle} className='w-9' />}
                </div>
                {/* < Contact_btn /> */}
            </div>

            {/* Large screen navigation */}

            < div className="large_screen px-6 hidden lg:flex justify-between items-center mt-8  2xl:mt-12 rounded-[5px] h-[100px] bg-white">
                <div className="logo ">
                    <img className='w-40 xl:w-50 cursor-pointer' src={logo} alt="" />
                </div>
                <ul className='flex gap-x-12 text-content'>
                    {navs.map((nav, index) => (
                        <li key={index} className='hover:text-primary'><a href="">{nav}</a></li>
                    ))}
                </ul>
                < Contact_btn />
            </div>

        </nav >

    )
}

export default Navigation