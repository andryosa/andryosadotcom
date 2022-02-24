import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './portfolio.css';
import corporate1 from '../image/port/corporate-01.png';
import corporate2 from '../image/port/corporate-02.png';
import covnewsletter from '../image/port/covernewsletter.png';
import covposter from '../image/port/coverposter.png';
import covcolor from '../image/port/covercoloring.png';
import covgreetings from '../image/port/covergreeting.png';
import covillu from '../image/port/coverillustration.png';
import covfdev from '../image/port/coverfuturedev.png';
import covmicrosite from '../image/port/covermicrosite.png';
import covcal from '../image/port/covercalculator.png';
import covcalver from '../image/port/covercalculatorver.png';
import covcolorver from '../image/port/covercoloringvertical.png';
import covgreetingsver from '../image/port/covergreetingvertical.png';
import portoficon from '../image/portfolioiconn.png';
import dgiicon from '../image/portfolioicongrey.png';
import webicon from '../image/webicon.png';
import covmicrositever2 from '../image/port/covermicrositever2.png';
import covtradekarma from '../image/port/cover-tradekarma.png';
import covnatur from '../image/port/cover-naturheilpraxis.png';
import covcode4you from '../image/port/cover-code4you.png';



const Portfolio = () => {
    //const [hideText1, setText1] = useState(false);//
    //const [hideText2, setText2] = useState(false);//
    const [hideDesgraf, setDesgraf] = useState(false);
    const incrumentDesgraf = () => {
        setDesgraf(!hideDesgraf)
    }

    const [hideWebdes, setWebdes] = useState(false);
    const incrumentWeb = () => {
        setWebdes(!hideWebdes)
    }

    return(
        <div>
        <div className='portfolio-mainDiv'>
        <h1 className='myportfoliotittle'>My Portfolio</h1>
            {/* <Link className='togleDesgraf' onClick={incrumentDesgraf}>Graphic Design</Link>
            <Link className='togleWebdes' onClick={incrumentWeb}>Frontend Design</Link> */}
        <div>
            <a className='portoBtn' href="#desGraf">Graphic Design</a>
            <a className='portoBtn' href="#webDes">Frontend Design</a>
        </div>
        <div className='recentPro'>
            <h3 className="worktypeTittle"><img src={webicon} alt="" className='portoficon'/>My Recent Project :</h3>
                <div className='newsDiv'>
                    <div className='news'>
                                <img className='newsimg' src={covcode4you} alt=""/>
                                <div className='insert2'>
                                <a className='link-port2' href='https://code4you.com/' target='_blank'>
                                    code4you.com
                                </a>
                                </div>
                    </div>
                </div>
        </div>
        <div className='flex-container'>
         {/* <div className={hideDesgraf? "hiden" : "shown", hideWebdes? "shown" : "hiden"}> */}
         
         <div id='desGraf' className='flex-item'>

            <h2 className='worktypeTittle'><img src={dgiicon} alt="" className='portoficon'/>Graphic Design & Illustration</h2>
         <div className='rowform desgraf'>
            <div className='portfolio-secondDiv'>
            <div className='thema'>
                <div className='corpoDiv'>
                    <div className='corporate-1'>
                                <img className='corpoimg' src={corporate1} alt=""/>
                                <div className='insert'>
                                <Link className='link-port' to='/ptsydeco'> Corporate Identity PT Sydeco</Link>
                                </div>
                    </div>
                    <div className='corporate-1'>
                                <img className='corpoimg' src={corporate2} alt=""/>
                                <div className='insert'>
                                    <Link className='link-port' to='/asuji'>Corporate Identity Asuji</Link>
                                </div>
                    </div>
                </div>
            </div>

            <div className='thema'>
                <div className='newsDiv'>
                    <div className='news'>
                                <img className='newsimg' src={covnewsletter} alt=""/>
                                <div className='insert2'>
                                <Link className='link-port2' to='/newsletter'>
                                    Newsletter
                                </Link>
                                </div>
                    </div>
                </div>
            </div>

            {/* <div className='thema'>
                <div className='newsDiv'>
                    <div className='news'>
                                <img className='newsimg' src={covfdev} alt=""/>
                                <div className='insert2'>
                                <a className='link-port2' href='https://andryosa.github.io/Future-Developer-G1/' target='_blank'>
                                    Web Design for Class Group <br/> (Future Developer)
                                </a>
                                </div>
                    </div>
                </div>
            </div> */}

            {/* <div className='thema'>
                <div className='newsDiv'>
                    <div className='news'>
                                <img className='newsimg' src={covmicrosite} alt=""/>
                                <div className='insert2'>
                                <a className='link-port2' href='https://andryosa.github.io/Final-Project/' target='_blank'>
                                    First Web Design <br/> after 4 weeks learning on orientation course!
                                </a>
                                </div>
                    </div>
                </div>
            </div> */}

            {/* <div className='thema bigscreenhide'>
                <div className='newsDiv'>
                    <div className='news'>
                                <img className='newsimg' src={covcal} alt=""/>
                                <div className='insert2'>
                                <a className='link-port2' href='https://andryosa.github.io/Calculator/' target='_blank'>
                                    Calculator App
                                </a>
                                </div>
                    </div>
                </div>
            </div> */}

            <div className='thema'>
                <div className='newsDiv'>
                    <div className='news'>
                                <img className='newsimg' src={covposter} alt=""/>
                                <div className='insert2'>
                                <Link className='link-port2' to='/poster'>Poster & Brochure</Link>
                                </div>
                    </div>
                </div>
            </div>

            <div className='thema bigscreenhide'>
                <div className='newsDiv'>
                    <div className='news'>
                                <img className='newsimg' src={covcolor} alt=""/>
                                <div className='insert2'>
                                <Link className='link-port2' to='/adultcoloringcalendar'>Adult Coloring Calendar</Link>
                                </div>
                    </div>
                </div>
            </div>

            <div className='thema bigscreenhide'>
                <div className='newsDiv'>
                    <div className='news'>
                                <img className='newsimg' src={covgreetings} alt=""/>
                                <div className='insert2'>
                                <Link className='link-port2' to='/greetingcards'>Greetings Card</Link>
                                </div>
                    </div>
                </div>
            </div>

            <div className='thema'>
                <div className='newsDiv'>
                    <div className='news'>
                                <img className='newsimg' src={covillu} alt=""/>
                                <div className='insert2'>
                                <Link className='link-port2' to='/illustration'>Illustration</Link>
                                </div>
                    </div>
                </div>
            </div>
            </div>

            <div className='portfolio-thirddDiv'>
                <div className='themaver'>
                    <div className='newsDivver'>
                        <div className='newsver'>
                                <img className='newsimgver' src={covcolorver} alt=""/>
                                <div className='insert2ver'>
                                <Link className='link-port2' to='/adultcoloringcalendar'>Adult Coloring Calendar</Link>
                                </div>
                        </div>
                    </div>
                </div>

                {/* <div className='themaCalver'>
                    <div className='newsDivver'>
                        <div className='newsver'>
                                <img className='newsimgver' src={covcalver} alt=""/>
                                <div className='insertCalver'>
                                <a className='link-port2' href='https://andryosa.github.io/Calculator/' target='_blank'>
                                    Calculator App
                                </a>
                                </div>
                        </div>
                    </div>
                </div> */}

                <div className='themaver'>
                    <div className='newsDivver'>
                        <div className='newsver'>
                                <img className='newsimgver' src={covgreetingsver} alt=""/>
                                <div className='insert2ver'>
                                <Link className='link-port2' to='/greetingcards'>Greetings Card</Link>
                                </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>

        {/* <div className={hideDesgraf? "shown" : "hiden", hideWebdes? "hiden" : "shown"}> */}
        <div id='webDes' className='flex-item'>

            <h2 className='worktypeTittle2'><img src={webicon} alt="" className='portoficon'/>Website & App</h2>

        <div className='rowform webdes'>
            <div className='portfolio-secondDiv'>

            <div className='thema'>
                <div className='newsDiv'>
                    <div className='news'>
                                <img className='newsimg' src={covcode4you} alt=""/>
                                <div className='insert2'>
                                <a className='link-port2' href='https://code4you.com/' target='_blank'>
                                    code4you.com
                                </a>
                                </div>
                    </div>
                </div>
            </div>

            <div className='thema'>
                <div className='newsDiv'>
                    <div className='news'>
                                <img className='newsimg' src={covnatur} alt=""/>
                                <div className='insert2'>
                                <a className='link-port2' href='https://naturheilpraxis-holthausen.de//' target='_blank'>
                                    naturheilpraxis-holthausen.de
                                </a>
                                </div>
                    </div>
                </div>
            </div>

            {/* <div className='thema'>
                <div className='newsDiv'>
                    <div className='news'>
                                <img className='newsimg' src={covfdev} alt=""/>
                                <div className='insert2'>
                                <a className='link-port2' href='https://andryosa.github.io/Future-Developer-G1/' target='_blank'>
                                    Website Task <br/> Future Developer
                                </a>
                                </div>
                    </div>
                </div>
            </div> */}

            <div className='thema'>
                <div className='newsDiv'>
                    <div className='news'>
                                <img className='newsimg' src={covtradekarma} alt=""/>
                                <div className='insert2'>
                                <a className='link-port2' href='http://tradekarma.herokuapp.com/' target='_blank'>
                                    Trade Karma <br/> My Final Project from One Year Course at DCI
                                </a>
                                </div>
                    </div>
                </div>
            </div>

            <div className='thema bigscreenhide'>
                <div className='newsDiv'>
                    <div className='news'>
                                <img className='newsimg' src={covcal} alt=""/>
                                <div className='insert2'>
                                <a className='link-port2' href='https://andryosa.github.io/Calculator/' target='_blank'>
                                    Calculator App
                                </a>
                                </div>
                    </div>
                </div>
            </div>

            <div className='thema bigscreenhide'>
                <div className='newsDiv'>
                    <div className='news'>
                                <img className='newsimg' src={covfdev} alt=""/>
                                <div className='insert2'>
                                <a className='link-port2' href='https://andryosa.github.io/Future-Developer-G1/' target='_blank'>
                                    Website Task <br/> Future Developer
                                </a>
                                </div>
                    </div>
                </div>
            </div>

            <div className='thema bigscreenhide'>
                <div className='newsDiv'>
                    <div className='news'>
                                <img className='newsimg' src={covmicrosite} alt=""/>
                                <div className='insert2'>
                                <a className='link-port2' href='https://andryosa.github.io/Final-Project/' target='_blank'>
                                    First Web Design <br/> after 4 weeks learning on orientation course!
                                </a>
                                </div>
                    </div>
                </div>
            </div>

            </div>

            <div className='portfolio-thirddDiv'>

            <div className='themaCalver'>
                    <div className='newsDivver'>
                        <div className='newsver'>
                                <img className='newsimgver' src={covfdev} alt=""/>
                                <div className='insertCalver'>
                                <a className='link-port2' href='https://andryosa.github.io/Future-Developer-G1/' target='_blank'>
                                    Website Task <br/> Future Developer
                                </a>
                                </div>
                        </div>
                    </div>
                </div>

                <div className='themaCalver'>
                    <div className='newsDivver'>
                        <div className='newsver'>
                                <img className='newsimgver' src={covcalver} alt=""/>
                                <div className='insertCalver'>
                                <a className='link-port2' href='https://andryosa.github.io/Calculator/' target='_blank'>
                                    Calculator App
                                </a>
                                </div>
                        </div>
                    </div>
                </div>

                <div className='themaCalver'>
                    <div className='newsDivver'>
                        <div className='newsver'>
                                <img className='newsimgver' src={covmicrositever2} alt=""/>
                                <div className='insertCalver'>
                                <a className='link-port2' href='https://andryosa.github.io/Final-Project/' target='_blank'>
                                    First Web Design <br/> after 4 weeks learning on orientation course!
                                </a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        {/* <Footer/> */}
        </div>
        </div>
    )
}

export default Portfolio;