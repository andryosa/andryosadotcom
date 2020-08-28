import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Aboutme.css';


const Edu = () => {
    //Hide and Show Edu--//
    const [hideEdu, setEdu] = useState(true);
    const [rotate, setrotate] = useState(true);
    const incrumentEdu = () => {
        setEdu(!hideEdu)
        setrotate(!rotate)
    }
    //--Hide and Show Edu//

    return(
                <div className='theTable'>
                    <Link className='incru' onClick={incrumentEdu}><h2>Education <span>{rotate? <>&#8681;</> : <>&#8679;</>}</span></h2></Link>
                    <table className={hideEdu? "hiden" : "shown"}>
                        <tr>
                            <td className='abttableTitle'>2019-2020</td>
                            <td className='abttableData1'><span title='Digital Career Institute'><a className='linkCampus' href="https://digitalcareerinstitute.org/">DCI (Hamburg)</a></span></td>
                            <td className='abttableData2'>One Year course of Web Development: HTML, CSS, JavaScript, React + Redux, Bootstrap, SCSS</td>
                        </tr>
                        <tr>
                            <td className='abttableTitle'>Juni-Juli 2019</td>
                            <td className='abttableData1'><span title='Digital Career Institute'><a className='linkCampus' href="https://digitalcareerinstitute.org/">DCI (Hamburg)</a></span></td>
                            <td className='abttableData2'>Orientation course of Web Development: HTML, CSS, JavaScript</td>
                        </tr>
                        <tr>
                            <td className='abttableTitle'>2012-2015</td>
                            <td className='abttableData1'><a className='linkCampus' href="https://isi.ac.id/" target="_blank">Institute Seni Indonesia (Yogyakarta)</a></td>
                            <td className='abttableData2'>Bachelor of Art: Visual Communication Design</td>
                        </tr>
                        <tr>
                            <td className='abttableTitle'>2009-2012</td>
                            <td className='abttableData1'><a className='linkCampus' href="https://unesa.ac.id/" target="_blank">Universitas Negeri Surabaya</a></td>
                            <td className='abttableData2'>D3: Graphic Design</td>
                        </tr>
                    </table>
                </div>   
    )
}

export default Edu;