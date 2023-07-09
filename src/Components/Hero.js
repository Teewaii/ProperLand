import React from 'react';
import left_pattern from '../../src/img/Home/Icon.png';
import right_pattern from '../../src/img/Home/Icon_rt.png';
import heroImg from '../../src/img/Home/hero_img.png'

function Hero() {
    return (
        <section className=" bg-gradient-to-l from-hero to-hero_end h-[100vh] relative">
            <div className="main_wrapper container">
                <div className="leftPattern absolute left-0 bottom-0">
                    <img src={left_pattern} alt="" />
                </div>
                <div className="rightPattern absolute right-0 top-0">
                    <img src={right_pattern} alt="" />
                </div>
                {/* <section className=" bg-heroBgd_rt h-[100vh] relative "> */}
                <div className="left_wrapper flex items-center">
                    <div className="left pt-40 relative lg:pt-[350px]">
                        <div className="topTag"></div>
                        <h1 className='header2 leading-[44px] lg:header1'>Find the perfect place to
                            Live with your family</h1>
                        <p>Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate.</p>
                    </div>
                    <div className="rigt absolute right-0 bottom-0">
                        <img src={heroImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero