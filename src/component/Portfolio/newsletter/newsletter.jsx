import React, { useState } from 'react';
import './newsletter.css';
import news1 from '../../image/port/newsletter1.png';
import news2 from '../../image/port/newsletter2.png';
import news3 from '../../image/port/newsletter3.png';


const Newsletter = () => {
    //Hide and Show Explenation--//
    const [hideText1, setText1] = useState(false);
     const [hideText2, setText2] = useState(false);
     const [hideText3, setText3] = useState(false);
    //--Hide and Show Explenation//

    return(
        <div className='newsletter-mainDiv'>
            <div className='newsletter-foto'>
                <img src={news1} className='news-foto' onMouseEnter={() => setText1(true)} onMouseLeave={() => setText1(false)}/>
                    <div className='text-big-hide'>
                                    <h2 className='newsletter-title'>PT Sydeco</h2>
                                    <h3>2014</h3>
                                    <p>NEWSLETTER PROMO WEBSITE</p>
                                    <p>
                                        Newsletter for marketing promo Smart Desainer by PT Sydeco. 
                                    </p>
                                    <p>TOOLS : ADOBE PHOTOSHOP, ADOBE ILLUSTRATOR</p>
                    </div>
                <img src={news2} className='news-foto' onMouseEnter={() => setText2(true)} onMouseLeave={() => setText2(false)}/>
                    <div className='text-big-hide'>
                                    <h2 className='newsletter-title'>PT Sydeco</h2>
                                    <h3>2014</h3>
                                    <p>NEWSLETTER ADVERTISEMENT WEBSITE</p>
                                    <p>
                                        Newsletter for marketing advertisement Smart Desainer by PT Sydeco. 
                                    </p>
                                    <p>TOOLS : ADOBE PHOTOSHOP, ADOBE ILLUSTRATOR</p>
                    </div>
                <img src={news3} className='news-foto' onMouseEnter={() => setText3(true)} onMouseLeave={() => setText3(false)}/>
                    <div className='text-big-hide'>
                                    <h2 className='newsletter-title'>PT Sydeco</h2>
                                    <h3>2015</h3>
                                    <p>NEWSLETTER PROMO</p>
                                    <p>
                                        Newsletter for marketing advertisement Smartlogic Pro by PT Sydeco. 
                                    </p>
                                    <p>TOOLS : ADOBE PHOTOSHOP, ADOBE ILLUSTRATOR</p>
                                    </div>
                    </div>

            <div className='newsletter-explaination'> 
                <div className='text-poster-fix'> 
                    <div className='newsletter-text'>
                            <h2>Newsletter:</h2>
                            <div className='texDiv1'>
                                {hideText1 &&(
                                    <div>
                                    <h1 className='newsletter-title'>PT Sydeco</h1>
                                    <h3>2014</h3>
                                    <p>NEWSLETTER PROMO WEBSITE</p>
                                    <p>
                                        Newsletter for marketing promo Smart Desainer by PT Sydeco. 
                                    </p>
                                    <p>TOOLS : ADOBE PHOTOSHOP, ADOBE ILLUSTRATOR</p>
                                    </div>
                                    )
                                }

                                {hideText2 &&(
                                    <div>
                                    <h1 className='newsletter-title'>PT Sydeco</h1>
                                    <h3>2014</h3>
                                    <p>NEWSLETTER ADVERTISEMENT WEBSITE</p>
                                    <p>
                                        Newsletter for marketing advertisement Smart Desainer by PT Sydeco. 
                                    </p>
                                    <p>TOOLS : ADOBE PHOTOSHOP, ADOBE ILLUSTRATOR</p>
                                    </div>
                                    )
                                }

                                {hideText3 &&(
                                    <div>
                                    <h1 className='newsletter-title'>PT Sydeco</h1>
                                    <h3>2015</h3>
                                    <p>NEWSLETTER PROMO</p>
                                    <p>
                                        Newsletter for marketing advertisement Smartlogic Pro by PT Sydeco. 
                                    </p>
                                    <p>TOOLS : ADOBE PHOTOSHOP, ADOBE ILLUSTRATOR</p>
                                    </div>
                                    )
                                }
                            </div>
                
                    </div>
                </div> 
            </div>
            
        </div>
    )
}

export default Newsletter;