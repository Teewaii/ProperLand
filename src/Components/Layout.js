import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

function Layout(props, { handleToggle, toggle, setToggle }) {
    return (
        <div className="wrapper ">
            <div className={props.class} >
                <Navigation />
                {props.children}
                < Footer />
            </div>
        </div>
    )
}

export default Layout