import React from 'react';
import './Sydeco.css';
import sydeco1 from '../image/port/sydeco1.png';
import sydeco2 from '../image/port/sydeco2.png';
import sydeco3 from '../image/port/sydeco3.png';
import sydeco4 from '../image/port/sydeco4.png';
import sydeco5 from '../image/port/sydeco5.png';
import sydeco6 from '../image/port/sydeco6.png';
import sydeco7 from '../image/port/sydeco7.png';



const Sydeco = () => {
    return(
        <div>
        <div className='corporate-mainDiv'>
            <div className='corporate-foto'>
                        <img className='sydeco-foto' src={sydeco1} alt=""/>
                        <img className='sydeco-foto' src={sydeco2} alt=""/>
                        <img className='sydeco-foto' src={sydeco3} alt=""/>
                        <img className='sydeco-foto' src={sydeco4} alt=""/>
                        <img className='sydeco-foto' src={sydeco5} alt=""/>
                        <img className='sydeco-foto' src={sydeco6} alt=""/>
                        <img className='sydeco-foto' src={sydeco7} alt=""/>
            </div>

            <div className='corporate-explaination'> 
                <div className='text-pos-fix'>
                <div className='corporate-text'>
                <h2>Corporate Design</h2>
                <h1 className='sydeco-title'>PT Sydeco</h1>
                <h3>2015</h3>
                <p>LOGO, GRAPHIC STANDART MANUAL, BUSINESS CARD, STATIONERRY, UNIFORM</p>
                    <p>
                        I redesign the corporate identity of PT Sydeco at 2015, including logo, graphic standart manual, business card, stationerry, uniform, etc. 
                        At that time I was working at PT Sydeco as Senior Graphic Designer. 
                        This project was also my final project of my college at 
                        <a className='linkCampus-s' href="https://isi.ac.id/" target="_blank"> Institute Seni Indonesia (Yogyakarta)</a>.
                    </p>
                <p>TOOLS : ADOBE PHOTOSHOP, ADOBE ILLUSTRATOR</p>
                </div>
                </div> 
            </div>
            
        </div>
        </div>
    )
}

export default Sydeco;