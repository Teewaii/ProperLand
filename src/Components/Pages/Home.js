import React from 'react'
import Hero from '../Hero'
import Intro from '../Intro'
import Featured from '../Featured'
import WhyUs from '../WhyUs'
import About from '../About'
import Services from '../Services'
import ToTop from '../Button/ToTop'
import Reviews from '../Reviews'
import Statistics from '../Statistics'
import Neighbourhoods from '../Neighbourhoods'

function Home() {
    return (
        <div className='relative'>
            <Hero />
            <Intro />
            <Featured />
            <WhyUs />
            <About />
            <Services />
            <Reviews />
            <Statistics />
            <Neighbourhoods />
        </div>
    )
}

export default Home