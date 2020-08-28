import React, { useState } from 'react';
import './poster.css';
import news1 from '../../image/port/poster1.png';
import news2 from '../../image/port/poster2.png';
import news3 from '../../image/port/poster3.png';
import bro1 from '../../image/port/brochure1.png';
import bro2 from '../../image/port/brochure2.png';


const Poster = () => {
    //Hide and Show Explenation--//
    const [hideText1, setText1] = useState(false);
     const [hideText2, setText2] = useState(false);
     const [hideText3, setText3] = useState(false);
     const [hideText4, setText4] = useState(false);
     const [hideText5, setText5] = useState(false);
    //--Hide and Show Explenation//

    return(
        <div className='posters-mainDiv'>
            <div className='posters-foto'>
                <img src={news1} className='poster-foto' onMouseEnter={() => setText1(true)} onMouseLeave={() => setText1(false)}/>
                    <div className='text-big-hide'>
                                    <h2 className='poster-title'>PT Sydeco</h2>
                                    <h3>2015</h3>
                                    <p>POSTER IT TEAM</p>
                                    <p>
                                        Poster for marketing IT Team by PT Sydeco. 
                                    </p>
                                    <p>TOOLS : ADOBE PHOTOSHOP, ADOBE ILLUSTRATOR</p>
                    </div>
                <img src={news2} className='poster-foto' onMouseEnter={() => setText2(true)} onMouseLeave={() => setText2(false)}/>
                    <div className='text-big-hide'>
                                    <h2 className='poster-title'>PT Sydeco</h2>
                                    <h3>2015</h3>
                                    <p>POSTER ADVERTISEMENT E_LIBRARY</p>
                                    <p>
                                        Poster for marketing advertisement E-Library by PT Sydeco. 
                                    </p>
                                    <p>TOOLS : ADOBE PHOTOSHOP, ADOBE ILLUSTRATOR</p>
                    </div>
                <img src={news3} className='poster-foto' onMouseEnter={() => setText3(true)} onMouseLeave={() => setText3(false)}/>
                    <div className='text-big-hide'>
                                    <h2 className='poster-title'>RUNWHEEL X</h2>
                                    <h3>2016</h3>
                                    <p>POSTER PRODUCT RUNWHEEL X</p>
                                    <p>
                                        Poster for marketing advertisement Runwheel X. 
                                    </p>
                                    <p>TOOLS : ADOBE PHOTOSHOP, ADOBE ILLUSTRATOR</p>
                    </div>
                <img src={bro1} className='poster-foto' onMouseEnter={() => setText4(true)} onMouseLeave={() => setText4(false)}/>
                    <div className='text-big-hide'>
                                    <h2 className='poster-title'>PT Sydeco</h2>
                                    <h3>2015</h3>
                                    <p>BROCHURE PROMO SMS GATEWAY</p>
                                    <p>
                                        Brochure for marketing advertisement SMS Gateway Pro by PT Sydeco. 
                                    </p>
                                    <p>TOOLS : ADOBE PHOTOSHOP, ADOBE ILLUSTRATOR</p>
                    </div>
                <img src={bro2} className='poster-foto' onMouseEnter={() => setText5(true)} onMouseLeave={() => setText5(false)}/>
                    <div className='text-big-hide'>
                                    <h2 className='poster-title'>PT Sydeco</h2>
                                    <h3>2015</h3>
                                    <p>BROCHURE PROMO</p>
                                    <p>
                                        Brochure for marketing advertisement Website by PT Sydeco. 
                                    </p>
                                    <p>TOOLS : ADOBE PHOTOSHOP, ADOBE ILLUSTRATOR</p>
                    </div>
        </div>

            <div className='poster-explaination'> 
                <div className='text-poster-fix'> 
                    <div className='poster-text'>
                            <h2>Poster & Brochure:</h2>
                            <div className='texDiv1'>
                                {hideText1 &&(
                                    <div>
                                    <h1 className='poster-title'>PT Sydeco</h1>
                                    <h3>2015</h3>
                                    <p>POSTER IT TEAM</p>
                                    <p>
                                        Poster for marketing IT Team by PT Sydeco. 
                                    </p>
                                    <p>TOOLS : ADOBE PHOTOSHOP, ADOBE ILLUSTRATOR</p>
                                    </div>
                                    )
                                }

                                {hideText2 &&(
                                    <div>
                                    <h1 className='poster-title'>PT Sydeco</h1>
                                    <h3>2015</h3>
                                    <p>POSTER ADVERTISEMENT E_LIBRARY</p>
                                    <p>
                                        Poster for marketing advertisement E-Library by PT Sydeco. 
                                    </p>
                                    <p>TOOLS : ADOBE PHOTOSHOP, ADOBE ILLUSTRATOR</p>
                                    </div>
                                    )
                                }

                                {hideText3 &&(
                                    <div>
                                    <h1 className='poster-title'>RUNWHEEL X</h1>
                                    <h3>2016</h3>
                                    <p>POSTER PRODUCT RUNWHEEL X</p>
                                    <p>
                                        Poster for marketing advertisement Runwheel X. 
                                    </p>
                                    <p>TOOLS : ADOBE PHOTOSHOP, ADOBE ILLUSTRATOR</p>
                                    </div>
                                    )
                                }

                                {hideText4 &&(
                                    <div>
                                    <h1 className='poster-title'>PT Sydeco</h1>
                                    <h3>2015</h3>
                                    <p>BROCHURE PROMO SMS GATEWAY</p>
                                    <p>
                                        Brochure for marketing advertisement SMS Gateway Pro by PT Sydeco. 
                                    </p>
                                    <p>TOOLS : ADOBE PHOTOSHOP, ADOBE ILLUSTRATOR</p>
                                    </div>
                                    )
                                }

                                {hideText5 &&(
                                    <div>
                                    <h1 className='poster-title'>PT Sydeco</h1>
                                    <h3>2015</h3>
                                    <p>BROCHURE PROMO</p>
                                    <p>
                                        Brochure for marketing advertisement Website by PT Sydeco. 
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

export default Poster;