import React, { useState } from 'react';
import './illustration.css';
import illu1 from '../../image/port/illustration1.png';
import illu2 from '../../image/port/illustration2.png';
import illu3 from '../../image/port/illustration3.png';


const Illustration = () => {
    //Hide and Show Explenation--//
    const [hideText1, setText1] = useState(false);
     const [hideText2, setText2] = useState(false);
     const [hideText3, setText3] = useState(false);
    //--Hide and Show Explenation//

    return(
        <div className='illustration-mainDiv'>
            <div className='illustration-foto'>
                <img src={illu1} className='illu-foto' onMouseEnter={() => setText1(true)} onMouseLeave={() => setText1(false)}/>
                    <div className='text-big-hide'>
                                    <h2 className='illustration-title1'>RED 'Lost in the Wood'</h2>
                                    <h3>2019</h3>
                                    <p>FAN ART MODERN VERSION OF 'RED RIDDING HOOD'</p>
                                    <p>
                                        This Artwork I created just as hobby. 
                                    </p>
                                    <p>TOOLS : ADOBE ILLUSTRATOR</p>
                    </div>
                <img src={illu2} className='illu-foto' onMouseEnter={() => setText2(true)} onMouseLeave={() => setText2(false)}/>
                    <div className='text-big-hide'>
                                    <h2 className='illustration-title2'>MULAN</h2>
                                    <h3>2019</h3>
                                    <p>FAN ART MODERN VERSION OF MULAN</p>
                                    <p>
                                        This Artwork I created just as hobby. 
                                    </p>
                                    <p>TOOLS : ADOBE ILLUSTRATOR</p>
                    </div>
                <img src={illu3} className='illu-foto' onMouseEnter={() => setText3(true)} onMouseLeave={() => setText3(false)}/>
                    <div className='text-big-hide'>
                                    <h2 className='illustration-title3'>MERIDA</h2>
                                    <h3>2020</h3>
                                    <p>FAN ART MODERN VERSION OF MERIDA FROM DISNEY MOVIE 'BRAVE'</p>
                                    <p>
                                        This Artwork I created just as hobby. 
                                    </p>
                                    <p>TOOLS : ADOBE ILLUSTRATOR</p>
                                    </div>
                    </div>

            <div className='illustration-explaination'> 
                <div className='text-illustration-fix'> 
                    <div className='illustration-text'>
                            <h2>Illustration:</h2>
                            <div className='texDiv1'>
                                {hideText1 &&(
                                    <div>
                                    <h1 className='illustration-title1'>RED 'Lost in the Wood'</h1>
                                    <h3>2019</h3>
                                    <p>FAN ART MODERN VERSION OF 'RED RIDDING HOOD'</p>
                                    <p>
                                        This Artwork I created just as hobby. 
                                    </p>
                                    <p>TOOLS : ADOBE ILLUSTRATOR</p>
                                    </div>
                                    )
                                }

                                {hideText2 &&(
                                    <div>
                                    <h1 className='illustration-title2'>MULAN</h1>
                                    <h3>2019</h3>
                                    <p>FAN ART MODERN VERSION OF MULAN</p>
                                    <p>
                                        This Artwork I created just as hobby. 
                                    </p>
                                    <p>TOOLS : ADOBE ILLUSTRATOR</p>
                                    </div>
                                    )
                                }

                                {hideText3 &&(
                                    <div>
                                    <h1 className='illustration-title3'>MERIDA</h1>
                                    <h3>2020</h3>
                                    <p>FAN ART MODERN VERSION OF MERIDA FROM DISNEY MOVIE 'BRAVE'</p>
                                    <p>
                                        This Artwork I created just as hobby. 
                                    </p>
                                    <p>TOOLS : ADOBE ILLUSTRATOR</p>
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

export default Illustration;