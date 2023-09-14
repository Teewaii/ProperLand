import React from 'react'
import ForsaleCard from './ForsaleCard'
import Features from './Features'

function Featured() {
    return (
        <section className="featured bg-[#F5F1EF] h-fit mt-[40px] py-[95px] ">
            <div className="wrapper container">
                <div className="header  flex flex-col items-center pb-[40px]">
                    <p className='text-sm uppercase tracking-[6px] lg:text-md 2xl:text-lg'>|<span className='text-secondary'>02</span> Featured properties|</p>
                    <h1 className='text-[24px] font-bold md:text-[35px] leading-[40px] my-4 md:max-w-[500px]'>Properties for sale in your favorite area</h1>
                </div>
                <div className="cardHolder grid grid-col-1  lg:grid-cols-2 2xl:grid-cols-3 gap-6 ">
                    {Features.map(({ cost, id, title, location, baths, beds, parking, area, pix }) => (
                        <ForsaleCard key={id}
                            cost={cost}
                            title={title}
                            location={location}
                            beds={beds}
                            baths={baths}
                            parking={parking}
                            area={area}
                            pix={pix}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Featured