import React from 'react';
import './home.css';
import bitmoji1 from '../Images/bitmoji1.png';
import Typed from 'react-typed';

const Home = () => {
    return ( 
        <React.Fragment>
            <div id="home" className="home">
                <h1>I am a Software<Typed 
                    strings={[' Developer',
                    ' Engineer',]}
                    typeSpeed={60}  
                    loop
                /></h1>
                <img src={bitmoji1} alt="Bitmoji" />
            </div>
        </React.Fragment>
     );
}
 
export default Home;