import React from 'react'
import videoPlay from '../../src/img/Home/Video Icon.png';

function Intro() {
    return (
        <section className="intro container h-[fit]">
            <div className="wrapper flex flex-col lg:flex-row py-4 lg:gap-8  md:py-28 ">

                <div className='left flex flex-col text-left h-fit bg-[#F2F2F2] mb-8 py-[45px] px-[35px] lg:py-[65px] lg:px-[70px] lg:mb-0 '>
                    <p className='text-sm tracking-[4px] lg:text-md md:tracking-[6px] 2xl:text-lg '>|<span className='text-secondary'>01</span> PROPERLAND INTRO|</p>
                    <h1 className='text-[24px] md:text-[35px] my-4 font-bold lg:max-w-[600px]'>Buying & Selling Property In An Easy Way</h1>
                    <p className='text-left text-link mb-4 md:text-[15px]'>Distinctively re-engineer revolutionary meta-services and premium  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.
                    </p>

                    <div className="bottom flex flex-col gap-2 lg:gap-4  lg:items-center lg:flex-row ">
                        <div className="play flex items-center gap-x-2">
                            <div className="prim_circle w-[14px] h-[14px] lg:w-[24px] lg:h-[24px] xl:w-[14px] xl:h-[14px] rounded-full bg-slate-300 flex items-center justify-center">
                                <div className="prim_circle w-[5px] h-[5px] lg:w-[8px] lg:h-[8px] xl:w-[6px] xl:h-[6px] rounded-full bg-slate-600"></div>
                            </div>
                            <span className='text-[#757575] text-[14px] lg:text-[14px] 2xl:text-[16px]'>Only pay when you publish</span>
                        </div>

                        <div className="features flex items-center gap-x-2">
                            <div className="prim_circle w-[14px] h-[14px] lg:w-[24px] lg:h-[24px] xl:w-[14px] xl:h-[14px] rounded-full bg-slate-300 flex items-center justify-center">
                                <div className="prim_circle w-[5px] h-[5px] lg:w-[8px] lg:h-[8px] xl:w-[6px] xl:h-[6px] rounded-full bg-slate-600"></div>
                            </div>
                            <span className='text-[#757575] text-[14px] lg:text-[14px] 2xl:text-[16px]'>Unlimited featured use
                            </span>
                        </div>

                        <div className="features flex items-center gap-x-2">
                            <div className="prim_circle w-[14px] h-[14px] lg:w-[24px] lg:h-[24px] xl:w-[14px] xl:h-[14px] rounded-full bg-slate-300 flex items-center justify-center">
                                <div className="prim_circle w-[5px] h-[5px] lg:w-[8px] lg:h-[8px] xl:w-[6px] xl:h-[6px] rounded-full bg-slate-600"></div>
                            </div>
                            <span className='text-[#757575] text-[14px] lg:text-[14px] 2xl:text-[16px]'>24/7 supports</span>
                        </div>
                    </div>
                </div>


              <div className="right bg-vid_img bg-cover bg-center bg-no-repeat flex  items-center justify-center h-[450px] lg:w-[840px] lg:max-h-[400px]">

                    <img className='cursor-pointer w-fit' src={videoPlay} alt="Vid player" />
                </div>
            </div>
        </section>
    )
}

export default Intro