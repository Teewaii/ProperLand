import React from 'react';
import new_york from '../../src/img/Home/NY.png';
import Neighbourhood_location from './Neighbourhood_location';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';


function Neighbourhoods() {
    return (
        <section className="Neighorhoods py-[95px] ">
            <div className="wrapper flex flex-col items-center">

                <div className="header mb-8 text-center container">
                    <h1 className='text-[24px]  md:text-[35px] my-4 font-bold '>Discover The Neighborhoods</h1>
                </div>
                <div className="locations flex flex-col gap-6 lg:flex-row container" >
                    {Neighbourhood_location.map(({ pix, title, num_property, id }) => (
                        <div key={id} className="New_york w-[250px] h-[407px] rounded-md bg-1why1 bg-cover  bg-no-repeat bg-top-left py-10 lg:pt-20 lg:h-[350px] relative " style={{ backgroundImage: `url(${pix})` }}>
                            <ArrowSmallRightIcon className='w-[30px] bg-white bg-opacity-[50%] cursor-pointer text-white p-1 rounded-full absolute top-4 right-4' />
                            <div className="details absolute left-4 bottom-4 text-left">
                                <h1 className='text-[18px] font-bold text-white'>{title}</h1>
                                <p className='text-secondary text-[12px]'>{num_property}ty</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>

    )
}

export default Neighbourhoods