import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer';
import ToTop from './Button/ToTop';

function Layout(props, { handleToggle, toggle, setToggle }) {
    return (
        <div className="wrapper ">
            <div className={props.class} >
                <Navigation />
                {props.children}
                < Footer />
                <ToTop />
            </div>
        </div>
    )
}

export default Layout