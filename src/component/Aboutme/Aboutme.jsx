import React, { useState } from 'react';
import './Aboutme.css';
import Personal from './personal';
import Edu from './Edu';
import Exp from './Exp';
import creative from '../image/creative.png';
import precision from '../image/precision.png';
import idea from '../image/idea.png';



const Aboutme = () => {
    //Hide and Show Explenation--//
    const [hideText1, setText1] = useState(false);
     const [hideText2, setText2] = useState(false);
     const [hideText3, setText3] = useState(false);
    //--Hide and Show Explenation//

    return(
        <div>
        <div className='Aboutme' id=''>
            <div className='divLeft'>
            <div className='aboutmeText'>
                <div className='story'>
                    <h1>About Me!</h1>
                    <p className='aboutMePar'>My Name is Andri, I am working on creative industry since 2014 as Graphic Designer and Illustrator, 
                        I've studied on Visual Communication Design at <a className='linkCampus1' href="https://isi.ac.id/" target="_blank">Institute Seni Indonesia (Yogyakarta)</a>, 
                        and I've graduated and get my Bachelor degree in 2015.
                        <br/><br/>
                        In the end of 2016, I moved to Hamburg, Germany, and there I have started one year course 
                        as web developer at <span title='Digital Career Institute'><a className='linkCampus1' href="https://digitalcareerinstitute.org/">DCI</a></span> Hamburg on 2019 until 2020, 
                        and now I work mostly as Graphic Designer, UI Designer and Frontend Developer.
                    </p>
                </div>
                <div className='myidea'>
                        <div className='point'>
                            <img src={creative} className='abt-icon' onMouseEnter={() => setText1(true)} onMouseLeave={() => setText1(false)}/>
                            <h3>Creative</h3>
                            {hideText1 &&(
                                <div className='texDiv1'>
                                    <p>I create design with good aesthetic quality of colors, composition, and layout.</p>
                                </div>
                                )
                            }
                        </div>
                        <div className='point'>
                            <img src={precision} className='abt-icon' onMouseEnter={() => setText2(true)} onMouseLeave={() => setText2(false)}/>
                            <h3>Precision</h3>
                            {hideText2 &&(
                                <div className='texDiv1'>
                                    <p>I create design that represent and deliver the message of the product / company, efficiently and effectively.</p>
                                </div>
                                )
                            }
                        </div>
                        <div className='point'>
                            <img src={idea} className='abt-icon' onMouseEnter={() => setText3(true)} onMouseLeave={() => setText3(false)}/>
                            <h3>Idea</h3>
                            {hideText3 &&(
                                <div className='texDiv1'>
                                    <p>I always look into new ideas and inspiration to create my design.</p>
                                </div>
                                )
                            }
                        </div>
                    </div>
                <div className='tables'>
                    <Personal/>
                    <Edu/>
                    <Exp/>
                </div>
                
            </div>
            </div>
            <div className='decoDiv'>
            </div>
        </div>
        </div>
    )
}

export default Aboutme;