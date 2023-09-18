import React from 'react';
import rent from '../img/Home/RentAhome.png';
import sale from '../img/Home/SaleAhome.png';
import buy from '../img/Home/BuyAhome.png';
import exp from '../img/Home/ExperienceAgent.png';
import support from '../img/Home/MemerSupport.png';

function Services() {
    return (
        <section className="services py-[110px] lg:py-[120px] 2xl:py-[160px]">
            <div className="wrapper container">
                <div className="header flex flex-col items-center">
                    <p className='text-sm uppercase tracking-[4px] md:tracking-[6px] lg:text-md 2xl:text-lg'>|<span className='text-secondary'>05</span> Services|</p>
                    <h1 className='text-[24px] font-bold  mb-12 leading-[30px] md:text-[35px] md:leading-[50px] my-4 md:max-w-[550px] '>See How We Can Help</h1>
                </div>

                <div className="servierItems flex flex-col justify-center gap-[120px] lg:flex-row lg:flex-wrap lg:gap-[50px] lg:gap-y-[120px]  ">

                    <div className="Rent flex flex-col items-center lg:w-[300px] 2xl:w-[350px] relative">
                        <img src={rent} className='w-[80px]' alt="Rent a room icon" />
                        <div className="info absolute top-[100px]">
                            <h1 className='text-[18px] text-center md:text-3xl font-bold mb-2 lg:text-[22px]'>Rent a Home</h1>
                            <p className='text-center text-[#8D8D8D]  text-md md:text-2xl lg:text-sm '>Distinctively re-engineer revolutionary meta-services and premium  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                        </div>
                    </div>

                    <div className="Sale flex flex-col items-center lg:w-[300px] 2xl:w-[350px] relative">
                        <img src={sale} className='w-[80px]' alt="Sale a room icon" />
                        <div className="info absolute top-[100px]">
                            <h1 className='text-[18px] text-center md:text-3xl font-bold mb-2 lg:text-[16px]'>Sale a Home</h1>
                            <p className='text-center text-[#8D8D8D]  text-md md:text-2xl lg:text-sm '>Frameworks to provide a robust synopsis for high level overviews. approaches lverall, Organically grow the holistic.</p>
                        </div>
                    </div>

                    <div className="Buy flex flex-col items-center lg:w-[300px] 2xl:w-[350px] relative">
                        <img src={buy} className='w-[80px]' alt="Buy a room icon" />
                        <div className="info absolute top-[100px]">
                            <h1 className='text-[18px] text-center md:text-3xl font-bold mb-2 lg:text-[16px]'>Buy a Home</h1>
                            <p className='text-center text-[#8D8D8D]  text-md md:text-2xl lg:text-sm '>Leverage agile frameworks to provide a robust synopsis for high level overviews. approaches lverall value proposition.</p>
                        </div>
                    </div>

                    <div className="Experience flex flex-col items-center lg:w-[300px] 2xl:w-[350px] relative">
                        <img src={exp} className='w-[80px]' alt="Experience agent a room icon" />
                        <div className="info absolute top-[100px]">
                            <h1 className='text-[18px] text-center md:text-3xl font-bold mb-2 lg:text-[16px]'>Experience Agent</h1>
                            <p className='text-center text-[#8D8D8D]  text-md md:text-2xl lg:text-sm '>Leverage agile frameworks to provide a robust synopsis for high level overviews. approaches lverall value proposition.</p>
                        </div>
                    </div>

                    <div className="Member flex flex-col items-center lg:w-[350px] relative">
                        <img src={support} className='w-[80px]' alt="support a room icon" />
                        <div className="info absolute top-[100px]">
                            <h1 className='text-[18px] text-center md:text-3xl font-bold mb-2 lg:text-[16px]'>Member Support</h1>
                            <p className='text-center text-[#8D8D8D]  text-md md:text-2xl lg:text-sm '>Leverage agile frameworks to provide a robust synopsis for high level overviews. approaches lverall value proposition.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Services