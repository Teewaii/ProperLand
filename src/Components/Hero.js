import React from 'react';
import left_pattern from '../../src/img/Home/Icon.png';
import right_pattern from '../../src/img/Home/Icon_rt.png';
import heroImg from '../../src/img/Home/hero_img.png';
import hux_icon from '../../src/img/Home/Vectorhux.png';
import Explore_btn from './Button/Explore_btn';

function Hero() {
    return (
        <section className=" bg-gradient-to-l from-hero to-hero_end h-[100vh] relative overflow-hidden ">
            <div className="main_wrapper ">
                <div className="leftPattern absolute left-0 bottom-0">
                    <img src={left_pattern} alt="" />
                </div>
                <div className="rightPattern absolute top-0 lg:bottom-0 md:right-[-380px]  lg:right-[-80px] ">
                    <img src={right_pattern} alt="" />
                </div>

                {/* <section className=" bg-heroBgd_rt h-[100vh] relative "> */}
                <div className="left_wrapper container flex items-start">
                    <div className="left pt-40 flex flex-col items-center lg:items-start relative lg:pt-[250px] xl:pt-[200px]  2xl:pt-[310px]">
                        <div className="topTag flex items-center gap-x-4 mb-8 bg-gradient-to-l from-hero from-0% w-fit px-4 py-1 ">
                            <img src={hux_icon} alt="" />
                            <p className='text-link text-sm tracking-[6px] uppercase'>Real Estate Agency</p>
                        </div>
                        <div className="middle_text mb-2 xl:mb-2 2xl:mb-6">
                            <h1 className='text-[28px] md:text-[40px] md:leading-[50px] font-[600] md:max-w-[600px] lg:header2 leading-[35px]  lg:text-left xl:text-[50px] xl:max-w-[500px] xl:leading-[55px] 2xl:text-[65px] 2xl:max-w-[650px] 2xl:leading-[75px]'>Find the perfect place to Live with your family</h1>
                            <p className='text-md lg:text-left my-4 lg:mt-4 lg:max-w-[420px] lg:text-[14px] 2xl:max-w-[600px] 2xl:text-[18px] text-link' >Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate.</p>
                        </div>
                        <Explore_btn />
                    </div>

                    <div className="building rigt absolute right-0 bottom-0 lg:bottom-0">
                        <img className='h-[40vh]  md:h-[68vh] lg:h-[92vh] ' src={heroImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero