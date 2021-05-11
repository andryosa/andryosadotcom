import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import './Aboutme.css';


const Personal = () => {
    //Hide and Show Per--//
    const [hidePer, setPer] = useState(true);
    const [rotate, setrotate] = useState(true);
    const incrumentPer = () => {
        setPer(!hidePer)
        setrotate(!rotate)
    }
    //--Hide and Show Per//

    return(
                <div className='theTable'>
                    <Link className='incru' onClick={incrumentPer}><h2>Personal Data <span>{rotate? <>&#8681;</> : <>&#8679;</>}</span></h2></Link>
                    <table className={hidePer? "hiden" : "shown"}>
                        <tr>
                            <td className='abttableTitle'>Name</td>
                            <td className='abttableData1'>Andri William</td>
                        </tr>
                        <tr>
                            <td className='abttableTitle'>Hobbies</td>
                            <td className='abttableData1'>Drawing, Cooking, Sport (Bouldering / Wall Climbing)</td>
                        </tr>
                        <tr>
                            <td className='abttableTitle'>Language</td>
                            <td className='abttableData1'>Javanese, Bahasa Indonesia, English, Deutsch</td>
                        </tr>
                        <tr>
                            <td className='abttableTitle'>Location</td>
                            <td className='abttableData1'>Eppendorf, Hamburg, Germany</td>
                        </tr>
                    </table>
                </div>   
    )
}

export default Personal;