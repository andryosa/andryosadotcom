import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import iconn from '../image/iconwhite-05.png'

const Navbar = props => {

    //Hide and Show Nav--//
    const [hideNav, setNav] = useState(true);
    const [bgGrey, setGrey] = useState (false)

    const incrument = () => {
        setNav(!hideNav)
        setGrey(!bgGrey)
    }
    //--Hide and Show Nav//


    return(
        <div className={props.textClass}>
            <div className='nav-links'>
                    <Link className='toggl' onClick={incrument}>
                        <li><img src={iconn} alt="" className='logo' /></li>
                    </Link>
                    <Link className='links' to='/' onClick={incrument}>
                        <li className={hideNav ? "hide" : "show"}>Home</li>
                    </Link>
                    <Link className='links' to='/aboutme' onClick={incrument}>
                        <li className={hideNav ? "hide" : "show"}>About Me</li>
                    </Link>
                    <Link className='links' to='/portfolio' onClick={incrument}>
                        <li className={hideNav ? "hide" : "show"}>Portfolio</li>
                    </Link>
                    <Link className='links' to='/contact' onClick={incrument}>
                        <li className={hideNav ? "hide" : "show"}>Contact</li>
                    </Link>
                </div>
        </div>
    )
}

export default Navbar;