import React, { useState } from 'react';
import './card.css';
import card1 from '../../image/port/greetingscard1.png';
import card2 from '../../image/port/greetingscard2.png';



const Card = () => {
    //Hide and Show Explenation--//
    const [hideText1, setText1] = useState(false);
     const [hideText2, setText2] = useState(false);
    //--Hide and Show Explenation//

    return(
        <div className='cards-mainDiv'>
            <div className='cards-foto'>
                <img src={card1} className='card-foto' onMouseEnter={() => setText1(true)} onMouseLeave={() => setText1(false)}/>
                    <div className='text-big-hide'>
                                    <h2>Greeting Card</h2>
                                    <h2 className='cards-title'>MERRY CHRISTMAS</h2>
                                    <h3>2017</h3>
                                    <p>
                                        Christmas Greeting Card.
                                    </p>
                                    <p>TOOLS : ADOBE ILLUSTRATOR</p>
                    </div>
                <img src={card2} className='card-foto' onMouseEnter={() => setText2(true)} onMouseLeave={() => setText2(false)}/>
                    <div className='text-big-hide'>
                                    <h2>Greeting Card</h2>
                                    <h2 className='cards-title'>EID MUBARAK</h2>
                                    <h3>2018</h3>
                                    <p>
                                        Eid Mubarak Greeting Card.
                                    </p>
                                    <p>TOOLS : ADOBE ILLUSTRATOR</p>
                    </div>
                
            </div>

            <div className='cards-explaination'> 
                <div className='text-card-fix'> 
                    <div className='cards-text'>
                            <h2>Greeting Cards:</h2>
                            <div className='texDiv1'>
                                {hideText1 &&(
                                    <div>
                                    <h1 className='cards-title'>MERRY CHRISTMAS</h1>
                                    <h3>2017</h3>
                                    <p>
                                        Christmas Greeting Card.
                                    </p>
                                    <p>TOOLS : ADOBE ILLUSTRATOR</p>
                                    </div>
                                    )
                                }

                                {hideText2 &&(
                                    <div>
                                    <h1 className='cards-title'>EID MUBARAK</h1>
                                    <h3>2018</h3>
                                    <p>
                                        Eid Mubarak Greeting Card.
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

export default Card;