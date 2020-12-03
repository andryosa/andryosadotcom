import React from 'react';
import './Asuji.css';
import asuji1 from '../image/port/asuji1.png';
import asuji2 from '../image/port/asuji2.png';
import asuji3 from '../image/port/asuji3.png';



const Asuji = () => {
    return(
        <div className='corporate-asuji-mainDiv desgraf'>
            <div className='corporate-asuji-foto'>
                        <img className='asuji-foto' src={asuji1} alt=""/>
                        <img className='asuji-foto' src={asuji2} alt=""/>
                        <img className='asuji-foto' src={asuji3} alt=""/>
            </div>

            <div className='corporate-asuji-explaination'> 
                <div className='text-asuji-pos-fix'>
                <div className='corporate-asuji-text'>
                <h2>Corporate Design</h2>
                <h1 className='asuji-title'>Asuji</h1>
                <h3>2016</h3>
                <p>LOGO, BUSINESS CARD, PRICE TAG</p>
                    <p>
                        Asuji is South Korean wig company that stand in Indonesia. I redesign the corporate identity of Asuji at 2016, 
                        based on their old logo, I made some change with the shape and color, made it more modern and stylist, 
                        since their product is belongs to fashion item.
                    </p>
                <p>TOOLS : ADOBE PHOTOSHOP, ADOBE ILLUSTRATOR</p>
                </div>
                </div> 
            </div>
            
        </div>
    )
}

export default Asuji;