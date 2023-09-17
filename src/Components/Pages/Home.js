import React from 'react'
import Hero from '../Hero'
import Intro from '../Intro'
import Featured from '../Featured'
import WhyUs from '../WhyUs'
import About from '../About'
import Services from '../Services'

function Home() {
    return (
        <div>
            <Hero />
            <Intro />
            <Featured />
            <WhyUs />
            <About />
            <Services />
        </div>
    )
}

export default Home