import React, { useState } from 'react';
import './footer.css';
import contacticon1 from '../image/contact-icon-01.png';
import contacticon2 from '../image/contact-icon-02.png';
import contacticon3 from '../image/contact-icon-03.png';
import contacticon4 from '../image/contact-icon-04.png';
import contacticon5 from '../image/contact-icon-05.png';


const Footer = props => {

    return(
        <div>
        <div className='footermainDiv'>
            <h5>MADE WITH &hearts; &copy; ANDRI GIANAPRIL WILLIAM, 2020</h5>
                <div className='contact-icondiv2'>
                    <a href="https://github.com/andryosa" target="_blank" title='Github'>
                        <img src={contacticon1} className='coniconpic2'/>
                    </a>
                    <a href="https://www.linkedin.com/in/andri-william-5b65b48b/" target="_blank" title='Linkedin'>
                        <img src={contacticon2} className='coniconpic2'/>
                    </a>
                    <a href="https://www.behance.net/andryosaaa" target="_blank" title='Behance'>
                        <img src={contacticon3} className='coniconpic2'/>
                    </a>
                    <a href="https://www.facebook.com/andryosaaa/" target="_blank" title='Facebook'>
                        <img src={contacticon4} className='coniconpic2'/>
                    </a>
                    <a href="mailto:william.andryosa@gmail.com" target="_blank" title='Email'>
                        <img src={contacticon5} className='coniconpic2'/>
                    </a>
                </div>
            <h5>LOCATION : EPPENDORF, HAMBURG, GERMANY</h5>
        </div>
        </div>
        
    )
}

export default Footer;