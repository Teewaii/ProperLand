import React from 'react'

function Statistics() {
    return (
        <section className="statistics py-[95px]">
            <div className="wrapper container flex flex-col gap-y-6 lg:flex-row lg:justify-between lg:w-[60%]">
                <div className="property_sales ">
                    <h1 className='text-[45px] font-bold'>56,180</h1>
                    <p className='text-link'>In property sales</p>
                </div>
                <div className="customer_satisfaction ">
                    <h1 className='text-[45px] font-bold'>99%</h1>
                    <p className='text-link'>Customer satisfaction</p>
                </div>
                <div className="Property_transaction">
                    <h1 className='text-[45px] font-bold'>25K+</h1>
                    <p className='text-link'>Property Transaction</p>
                </div>
                <div className="Price_Reduce">
                    <h1 className='text-[45px] font-bold'>2,918</h1>
                    <p className='text-link'>Price Reduce</p>
                </div>
            </div>
        </section>
    )
}

export default Statistics