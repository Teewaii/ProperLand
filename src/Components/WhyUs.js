import React from 'react'

function WhyUs() {
    return (
        <section className="whyUs h-[fit] py-[140px] ">
            <div className="wrapper  flex flex-col items-center container">
                <div className="header  flex flex-col items-center">
                    <p className='text-sm uppercase tracking-[4px] md:tracking-[6px] lg:text-md 2xl:text-lg'>|<span className='text-secondary'>03</span> Why Choose|</p>
                    <h1 className='text-[24px] font-bold  mb-12 leading-[30px] md:text-[35px] md:leading-[50px] my-4 md:max-w-[550px] '>Why Choose Our Properties Of Real Estate Industries</h1>
                </div>

                <div className="packages grid grid-cols-1 grid-rows-5 gap-[24px] w-[100%] min-h-[100vh] lg:grid-rows-2 lg:grid-cols-3  lg:h-[850px]">

                    <div className="budget bg-1why1 bg-cover px-8 bg-no-repeat bg-left pb-10   row-span-1 col-start-1 col-span-1 h-[fit] lg:col-start-1 lg:col-span-1 lg:pb-0 ">
                        <div className="text  flex flex-col items-start mt-[190px] lg:mt-[220px] ">
                            <h1 className='font-bold mb-2'>Budget Friendly</h1>
                            <p className='text-left text-link  text-sm '>Distinctively re-engineer revolutionary meta-services and premium  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                        </div>
                    </div>

                    <div className="hux bg-2why2a bg-cover bg-no-repeat bg-left pb-10   row-span-1 row-start-2 lg:row-start-1 col-span-1 h-[fit] lg:col-start-2 lg:col-span-2 lg:pb-0 ">

                    </div>

                    <div className="trustees bg-1why2 bg-cover bg-no-repeat bg-left pb-10   px-8 h-[fit] row-start-3 row-span-1 col-start-1 col-span-1 lg:col-start-1 lg:row-start-2 lg:pb-0">
                        <div className="text  flex flex-col items-start mt-[190px] lg:mt-[220px] ">
                            <h1 className='font-bold mb-2'>Trusted By Thousands</h1>
                            <p className='text-left text-link text-sm '>Distinctively re-engineer revolutionary meta-services and premium  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                        </div>
                    </div>

                    <div className="primeLocation bg-2why3 px-8 bg-cover bg-no-repeat bg-left pb-10   h-[fit] row-start-4 col-span-1 lg:col-start-2 lg:row-start-2 lg:pb-0">
                        <div className="text  flex flex-col items-start mt-[190px] lg:mt-[220px] ">
                            <h1 className='font-bold mb-2'>Prime Location</h1>
                            <p className='text-left text-link text-sm '>Distinctively re-engineer revolutionary meta-services and premium  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                        </div>
                    </div>

                    <div className="commission bg-3why1 px-8 bg-cover bg-no-repeat bg-left pb-10   row-start-5 h-[fit] row-span-1 col-span-1 lg:col-start-3 lg:row-start-2  lg:pb-0 ">
                        <div className="text  flex flex-col items-start mt-[190px] lg:mt-[220px] ">
                            <h1 className='font-bold mb-2'>Lowest Commission</h1>
                            <p className='text-left text-link text-sm '>Distinctively re-engineer revolutionary meta-services and premium  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs