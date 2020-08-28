import React, { useState } from 'react';
import './coloring.css';
import cal1 from '../../image/port/coloringcalendar1.png';
import cal2 from '../../image/port/coloringcalendar2.png';
import cal3 from '../../image/port/coloringcalendar3.png';
import cal4 from '../../image/port/coloringcalendar4.png';



const Coloring = () => {
    //Hide and Show Explenation--//
    const [hideText1, setText1] = useState(false);
     const [hideText2, setText2] = useState(false);
     const [hideText3, setText3] = useState(false);
     const [hideText4, setText4] = useState(false);
    //--Hide and Show Explenation//

    return(
        <div className='coloring-mainDiv'>
            <div className='coloring-foto'>
                <img src={cal1} className='color-foto' onMouseEnter={() => setText1(true)} onMouseLeave={() => setText1(false)}/>
                    <div className='text-big-hide'>
                                    <h2 className='coloring-title'>The Color of Indonesia</h2>
                                    <h3>2016</h3>
                                    <p>TARI BALI</p>
                                    <p>
                                        Adult Coloring Calendar 'The Colour of Indonesia',
                                        <br/> was a project I joined with 4 others illustrator,
                                        <br/> and it published and sold in all book stores in Indonesia. 
                                    </p>
                                    <p>TOOLS : ADOBE ILLUSTRATOR</p>
                    </div>
                <img src={cal2} className='color-foto' onMouseEnter={() => setText2(true)} onMouseLeave={() => setText2(false)}/>
                    <div className='text-big-hide'>
                                    <h2 className='coloring-title'>The Color of Indonesia</h2>
                                    <h3>2016</h3>
                                    <p>GARUDA WISNU KENCANA (GWK)</p>
                                    <p>
                                        Adult Coloring Calendar 'The Colour of Indonesia',
                                        <br/> was a project I joined with 4 others illustrator,
                                        <br/> and it published and sold in all book stores in Indonesia. 
                                    </p>
                                    <p>TOOLS : ADOBE ILLUSTRATOR</p>
                    </div>
                <img src={cal3} className='color-foto' onMouseEnter={() => setText3(true)} onMouseLeave={() => setText3(false)}/>
                    <div className='text-big-hide'>
                                    <h2 className='coloring-title'>The Color of Indonesia</h2>
                                    <h3>2016</h3>
                                    <p>CENDRAWASIH BIRD</p>
                                    <p>
                                        Adult Coloring Calendar 'The Colour of Indonesia',
                                        <br/> was a project I joined with 4 others illustrator,
                                        <br/> and it published and sold in all book stores in Indonesia. 
                                    </p>
                                    <p>TOOLS : ADOBE ILLUSTRATOR</p>
                                    </div>
                <img src={cal4} className='color-foto' onMouseEnter={() => setText4(true)} onMouseLeave={() => setText4(false)}/>
                    <div className='text-big-hide'>
                                    <h2 className='coloring-title'>The Color of Indonesia</h2>
                                    <h3>2016</h3>
                                    <p>BARONG MASK</p>
                                    <p>
                                        Adult Coloring Calendar 'The Colour of Indonesia',
                                        <br/> was a project I joined with 4 others illustrator,
                                        <br/> and it published and sold in all book stores in Indonesia. 
                                    </p>
                                    <p>TOOLS : ADOBE ILLUSTRATOR</p>
                                    </div>
                    </div>

            <div className='coloring-explaination'> 
                <div className='text-color-fix'> 
                    <div className='coloring-text'>
                            <h2>Adult Coloring Calendar:</h2>
                            <div className='texDiv1'>
                                {hideText1 &&(
                                    <div>
                                    <h1 className='coloring-title'>"The Color of Indonesia"</h1>
                                    <h3>2016</h3>
                                    <p>TARI BALI</p>
                                    <p>
                                        Adult Coloring Calendar 'The Colour of Indonesia',
                                        <br/> was a project I joined with 4 others illustrator,
                                        <br/> and it published and sold in all book stores in Indonesia. 
                                    </p>
                                    <p>TOOLS : ADOBE ILLUSTRATOR</p>
                                    </div>
                                    )
                                }

                                {hideText2 &&(
                                    <div>
                                    <h1 className='coloring-title'>"The Color of Indonesia"</h1>
                                    <h3>2016</h3>
                                    <p>GARUDA WISNU KENCANA (GWK)</p>
                                    <p>
                                        Adult Coloring Calendar 'The Colour of Indonesia',
                                        <br/> was a project I joined with 4 others illustrator,
                                        <br/> and it published and sold in all book stores in Indonesia. 
                                    </p>
                                    <p>TOOLS : ADOBE ILLUSTRATOR</p>
                                    </div>
                                    )
                                }

                                {hideText3 &&(
                                    <div>
                                    <h1 className='coloring-title'>"The Color of Indonesia"</h1>
                                    <h3>2016</h3>
                                    <p>CENDRAWASIH BIRD</p>
                                    <p>
                                        Adult Coloring Calendar 'The Colour of Indonesia',
                                        <br/> was a project I joined with 4 others illustrator,
                                        <br/> and it published and sold in all book stores in Indonesia. 
                                    </p>
                                    <p>TOOLS : ADOBE ILLUSTRATOR</p>
                                    </div>
                                    )
                                }

                                {hideText4 &&(
                                    <div>
                                    <h1 className='coloring-title'>"The Color of Indonesia"</h1>
                                    <h3>2016</h3>
                                    <p>BARONG MASK</p>
                                    <p>
                                        Adult Coloring Calendar 'The Colour of Indonesia',
                                        <br/> was a project I joined with 4 others illustrator,
                                        <br/> and it published and sold in all book stores in Indonesia. 
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

export default Coloring;