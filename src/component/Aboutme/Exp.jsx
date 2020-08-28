import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Aboutme.css';


const Exp = () => {
    //Hide and Show Exp--//
    const [hideExp, setExp] = useState(true);
    const [rotate, setrotate] = useState(true);
    const incrumentExp = () => {
        setExp(!hideExp)
        setrotate(!rotate)
    }
    //--Hide and Show Exp//

    return(
        <div>
                <div className='theTable'>
                    <Link className='incru' onClick={incrumentExp}><h2>Experience <span>{rotate? <>&#8681;</> : <>&#8679;</>}</span></h2></Link>
                    <table className={hideExp? "hiden" : "shown"}>
                        <tr>
                            <td className='abttableTitle'>2015-2019</td>
                            <td className='abttableData1'>Freelance</td>
                            <td className='abttableData2'>Graphic Designer & Illustrator</td>
                        </tr>
                        <tr>
                            <td className='abttableTitle'>2014-2015</td>
                            <td className='abttableData1'>PT Sydeco</td>
                            <td className='abttableData2'>Senior Graphic Designer</td>
                        </tr>
                        <tr>
                            <td className='abttableTitle'>2013-2014</td>
                            <td className='abttableData1'>Online Magazine 'KERTOSONO'</td>
                            <td className='abttableData2'>Illustrator</td>
                        </tr>
                        <tr>
                            <td className='abttableTitle'>2007-2009</td>
                            <td className='abttableData1'>School Magazine 'SMAKER'</td>
                            <td className='abttableData2'>Graphic & Layout Designer</td>
                        </tr>
                    </table>
                </div>   
                </div>
    )
}

export default Exp;