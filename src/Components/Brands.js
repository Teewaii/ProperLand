import React from 'react';
import BrandsLogo from './BrandsLogo';
import Explore_btn from './Button/Explore_btn';

function Brands() {
    return (
        <section className="Brand container">
            <div className="wrapper flex flex-col items-center justify-center bg-[#F5F1EF] py-[110px] ">
                <div className="header flex flex-col items-center">
                    <h1 className='text-[20px] font-bold mb-12 md:text-[25px] px-[5px] my-4 lg:px-0 '>More than 50+ Brands Trusted World Wide</h1>
                </div>

                <div className="LogoWrapper  flex flex-col items-center justify-center gap-[30px] mb-[50px] lg:gap-[60px] md:flex-row md:flex-wrap lg:max-w-[90%] 2xl:max-w-[70%] ">
                    {BrandsLogo.map(({ pix, id }) => (
                        <div key={id} className="BrandLogo flex w-fit flex-col items-center relative">
                            <img src={pix} className='w-[fit]' alt="Brand Logo a room icon" />
                        </div>
                    ))}

                </div>
                <Explore_btn />
            </div>
        </section>
    )
}

export default Brands