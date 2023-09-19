import React from 'react';
// import victor from '../img/Home/victor.jpg';
import Review from './Rev';

function Reviews() {
    return (
        <section className="reviews bg-[#F3E8E2] h-fit py-[95px]">
            <div className="wrapper container">
                <div className="review">
                    <h1 className='text-[24px] font-bold  mb-8 leading-[30px] md:text-[35px] md:leading-[50px] my-4 md:max-w-[550px]'>What our customers say about us</h1>

                    {Review.map(({ name, title, pix, msg, index }) => (


                        <div key={index} className="bio flex flex-col mb-14 ">
                            <p className='text-sm text-link text-left bg-gradient-to-bl from-[#ECC8B7] to-[#F4DBCE] rounded-[45px] rounded-bl-[0px] mb-4 p-[30px]  md:text-[15px] lg:max-w-[450px]'>{msg}</p>
                            <div className="bottom flex items-center  gap-x-3                   ">
                                <div className="head border-[#F4DACD] overflow-hidden border-[2px]  rounded-full w-[45px] h-[45px] ">
                                    <img src={pix} className=' w-[40px] ' alt="{name} headshot" />
                                </div>

                                <div className="info flex flex-col items-start">
                                    <h1 className='text-[17px] font-bold md:text-[35px]'>{name}</h1>
                                    <p className='text-[13px] text-link text-left md:text-[15px]'>{title}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Reviews