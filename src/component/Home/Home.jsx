import React  from 'react';
import Section1 from '../Section1/section1';
import Section2 from '../Section2/section2';
import Section3 from '../Section3/section3';
import Footer from '../Footer/footer';

const Home = () => {
    return(
        <div>
            <Section1/>
            <Section2/>
            <Section3/>
            <Footer/>
        </div>
    )
}

export default Home;