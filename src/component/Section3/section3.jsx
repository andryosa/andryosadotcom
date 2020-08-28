import React, { useState } from 'react';
import './section3.css';
import dg1 from '../image/dg-icons-01.png';
import dg2 from '../image/dg-icons-02.png';
import dg3 from '../image/dg-icons-03.png';
import dg4 from '../image/dg-icons-04.png';


const Section3 = props => {

    return(
        <div>
        <div className='mainDiv3'>
            <div className='intro-text3'>
                <h1>What I Can Do:</h1>
                <div className='div3content'>
                    <div className='whaticando'>
                        <img src={dg1} className='dg-icons'/>
                        <h2>Graphic Design</h2>
                        <p>
                            Graphic Design in general is been my main concern, 
                            I was worked a lot designing marketing media for so many years, 
                            either print or digital media for so many client. 
                        </p>
                    </div>

                    <div className='whaticando'>
                        <img src={dg2} className='dg-icons'/>
                        <h2>Frontend Design</h2>
                        <p>
                            {/* I was working at web development company before, 
                            started as graphic designer on marketing devision, 
                            I just creating newsletter, brochure, and poster. 
                            And then I started joining developer team and 
                            designing the layout for the websites, 
                            using Adobe Photoshop and Illustrator, I also supporting the 
                            developer team with image editing. */}
                            At 2019 I started a web development cours, 
                            I've learn a lot of programming languages, 
                            {/* such as HTML, CSS, SCSS, JavaScript, React, etc. */}
                            <br/><br/> 
                            Back on my basic before as Graphic Designer, I realy interested 
                            to be Frontend Developer, creating clean code, simple and aesthetic UI and UX Design.
                        </p>
                    </div>

                    <div className='whaticando'>
                        <img src={dg3} className='dg-icons'/>
                        <h2>Illustrator</h2>
                        <p>
                            Since I was a kid, I like a lot to draw as a hobby, 
                            now I can work paper and or digital illustrator.


                        </p>
                    </div>

                    <div className='whaticando'>
                        <img src={dg4} className='dg-icons'/>
                        <h2>Photography</h2>
                        <p>
                            On my college I've learn Photography as well, 
                            but personaly I never work as photographer before, 
                            but I taking picture mostly to supporting my design.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
        
    )
}

export default Section3;