import React from "react";
import './section1.css';
import Name from '../image/name-t.png';
import mypic from '../image/profile.png';
import nameTag from '../image/nametag.png';
import contacticon1 from '../image/contact-icon-01.png';
import contacticon2 from '../image/contact-icon-02.png';
import contacticon3 from '../image/contact-icon-03.png';
import contacticon4 from '../image/contact-icon-04.png';
import contacticon5 from '../image/contact-icon-05.png';


function Section1() {
    return(
        <div className='mainDiv1'>
            <div className='intro-text'>
                <img src={nameTag} className='nametag'/>
                <div className='contact-icondiv1'>
                    <a href="https://github.com/andryosa" target="_blank" title='Github'>
                        <img src={contacticon1} className='coniconpic'/>
                    </a>
                    <a href="https://www.linkedin.com/in/andri-william-5b65b48b/" target="_blank" title='Linkedin'>
                        <img src={contacticon2} className='coniconpic'/>
                    </a>
                    <a href="https://www.behance.net/andryosaaa" target="_blank" title='Behance'>
                        <img src={contacticon3} className='coniconpic'/>
                    </a>
                    <a href="https://www.facebook.com/andryosaaa/" target="_blank" title='Facebook'>
                        <img src={contacticon4} className='coniconpic'/>
                    </a>
                    <a href="mailto:william.andryosa@gmail.com" target="_blank" title='Email'>
                        <img src={contacticon5} className='coniconpic'/>
                    </a>
                </div>
                {/* <p>HEY THERE! IT'S ME</p> */}
                {/* <h1>ANDRI WILLIAM</h1> */}
                {/* <img src={Name} className='nameImg'/> */}
                {/* <p>I am Frontend Developer and Graphic Designer</p> */}
            </div>
            <div className='intro-pic'>
                <img src={mypic} className='myPic'/>
            </div>
        </div>
    )
}

export default Section1;