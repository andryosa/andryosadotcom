import React, { useState } from 'react';
import './contact.css';
import contactcontacticon1 from '../image/contact-icon-01.png';
import contactcontacticon2 from '../image/contact-icon-02.png';
import contactcontacticon3 from '../image/contact-icon-03.png';
import contactcontacticon4 from '../image/contact-icon-04.png';
import contactcontacticon5 from '../image/contact-icon-05.png';
import smartphone from '../image/smartphone.png';
import Footer from '../Footer/footer';


const Contact = props => {

    return(
        <div>
            <div>

                <div className='contactmainDiv'>
                    <div className='contact-div1'>
                        <h2 className='contacts'>Contact Me!</h2>
                        {/* <p>Email : william.andryosa@gmail.com <br/> Address : Eppendorf, Hamburg, Germany <br/></p> */}
                        <table className='contact-table'>
                            <tr>
                                <td className='contableTitle'>Email:</td>
                                <td className='contableData1'> <a href="mailto:william.andryosa@gmail.com" target="_blank" className='contact-table-a'>william.andryosa@gmail.com</a> </td>
                            </tr>

                            <tr>
                                <td className='contableTitle'>Address</td>
                                <td className='contableData1'>Eppendorf, Hamburg, Germany</td>
                            </tr>
                        </table>
                    </div>

                    <div className='contact-div2'>
                        <div className='contact-contact-icondiv2'>
                            <a href="https://github.com/andryosa" target="_blank" title='Github'>
                                <img src={contactcontacticon1} className='contact-coniconpic2 apic1'/>
                            </a>

                            <a href="https://www.linkedin.com/in/andri-william-5b65b48b/" target="_blank" title='Linkedin'>
                                <img src={contactcontacticon2} className='contact-coniconpic2 apic2'/>
                            </a>

                            <a href="https://www.behance.net/andryosaaa" target="_blank" title='Behance'>
                                <img src={contactcontacticon3} className='contact-coniconpic2 apic3'/>
                            </a>

                            <a href="https://www.facebook.com/andryosaaa/" target="_blank" title='Facebook'>
                                <img src={contactcontacticon4} className='contact-coniconpic2 apic4'/>
                            </a>

                            <a href="mailto:william.andryosa@gmail.com" target="_blank" title='Email'>
                                <img src={contactcontacticon5} className='contact-coniconpic2 apic5'/>
                            </a>
                        </div>
                        <img src={smartphone} alt="" className='smartphone'/>
                    </div>
                        
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}

export default Contact;