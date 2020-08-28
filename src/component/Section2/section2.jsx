import React, { useState } from 'react';
import './section2.css';

const Section2 = props => {
    //Hide and Show Nav--//
    const [hideAbout, setAbout] = useState(true);

    const incrumentAbout = () => {
        setAbout(!hideAbout)
    }
    //--Hide and Show Nav//

    return(
        <div>
        <div className='mainDiv2' id='aboutMe'>
            <div className='intro-text2'>
                <h1>About Me</h1>
                <p className='aboutMePar'>My Name is Andri, I worked on creative industry since 2014 as Graphic Designer and Illustrator, 
                    I've studied on Visual Communication Design at <a className='linkIsi' href="https://isi.ac.id/" rel=''>Institute Seni Indonesia (Yogyakarta)</a>, 
                    and I've graduated and get my Bachelor degree in 2015.
                    <br/><br/>
                    In the end of 2016, I moved to Hamburg, Germany, and there I have started one year course 
                    as web developer at <span title='Digital Career Institute'><a className='linkIsi' href="https://digitalcareerinstitute.org/">DCI</a></span> Hamburg on 2019 until 2020, 
                    and now I work mostly as Frontend Developer and Graphic Designer.
                     </p>

                     {/* <button onClick={incrumentAbout}>Read more!</button>  */}
                     
                     
            </div>
            <div className='personalData'>
                <table>
                    <tr>
                        <td className='tableTitle'>Language</td>
                        <td className='tableData'>Javanese, Bahasa Indonesia, English, Deutsch</td>
                    </tr>
                    <tr>
                        <td className='tableTitle'>Skills</td>
                        <td className='tableData'>Graphic Design, UI/UX Design, Illustration, Photography, Corporate Identity</td>
                    </tr>
                </table>
            </div>
        </div>

        <div className={hideAbout ? "hideAbout" : "showAbout"}>
        <div className='mainDiv2' id='aboutMe'>
            <div className='intro-text2'>
                <h1>About Me</h1>
                <p className='aboutMePar'>My Name is Andri, I worked on creative industry since 2014 as Graphic Designer and Illustrator, 
                    I've studied on Visual Communication Design at <a className='linkIsi' href="https://isi.ac.id/" target="_blank">Institute Seni Indonesia (Yogyakarta)</a>, 
                    and I've graduated and get my Bachelor degree in 2015.
                    <br/><br/>
                    In the end of 2016, I moved to Hamburg, Germany, and there I have started one year course 
                    as web developer at <span title='Digital Career Institute'><a className='linkIsi' href="https://digitalcareerinstitute.org/">DCI</a></span> Hamburg on 2019 until 2020, 
                    and now I work mostly as Frontend Developer and Graphic Designer.
                     </p>

                     <button onClick={incrumentAbout}>Hide</button> 
                     
                     
            </div>
            <div className='personalData'>
                <table>
                    <tr>
                        <td className='tableTitle'>Language</td>
                        <td className='tableData'>Javanese, Bahasa Indonesia, English, Deutsch</td>
                    </tr>
                    <tr>
                        <td className='tableTitle'>Skills</td>
                        <td className='tableData'>Graphic Design, UI/UX Design, Illustration, Photography, Corporate Identity</td>
                    </tr>
                </table>
            </div>
        </div>
        </div>
        </div>
        
    )
}

export default Section2;