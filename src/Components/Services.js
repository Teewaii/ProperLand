import React from 'react';
import rent from '../img/Home/RentAhome.png';
import sale from '../img/Home/SaleAhome.png';
import buy from '../img/Home/BuyAhome.png';
import support from '../img/Home/MemerSupport.png';

function Services() {
    return (
        <section className="services py-[110px] lg:py-[140px]">
            <div className="wrapper container">
                <div className="header flex flex-col items-center">
                    <p className='text-sm uppercase tracking-[4px] md:tracking-[6px] lg:text-md 2xl:text-lg'>|<span className='text-secondary'>05</span> Services|</p>
                    <h1 className='text-[24px] font-bold  mb-12 leading-[30px] md:text-[35px] md:leading-[50px] my-4 md:max-w-[550px] '>See How We Can Help</h1>
                </div>

                <div className="servierItems flex flex-col gap-[100px]">

                    <div className="Rent flex flex-col items-center relative">
                        <img src={rent} className='w-[100px]' alt="Rent a room icon" />
                        <div className="info absolute top-[130px]">
                            <h1 className='text-[22px] text-center md:text-3xl font-bold mb-2 lg:text-[22px]'>Rent a Home</h1>
                            <p className='text-center text-[#8D8D8D]  text-md md:text-2xl lg:text-sm '>Distinctively re-engineer revolutionary meta-services and premium  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                        </div>
                    </div>

                    <div className="Sale flex flex-col items-center relative">
                        <img src={rent} className='w-[100px]' alt="Rent a room icon" />
                        <div className="info absolute top-[130px]">
                            <h1 className='text-[22px] text-center md:text-3xl font-bold mb-2 lg:text-[22px]'>Sale a Home</h1>
                            <p className='text-center text-[#8D8D8D]  text-md md:text-2xl lg:text-sm '>Frameworks to provide a robust synopsis for high level overviews. approaches lverall, Organically grow the holistic.</p>
                        </div>
                    </div>

                    <div className="Buy flex flex-col items-center relative">
                        <img src={rent} className='w-[100px]' alt="Rent a room icon" />
                        <div className="info absolute top-[130px]">
                            <h1 className='text-[22px] text-center md:text-3xl font-bold mb-2 lg:text-[22px]'>Buy a Home</h1>
                            <p className='text-center text-[#8D8D8D]  text-md md:text-2xl lg:text-sm '>Leverage agile frameworks to provide a robust synopsis for high level overviews. approaches lverall value proposition.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Services