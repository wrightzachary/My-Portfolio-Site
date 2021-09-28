import React from 'react';
import './home.css';
import bitmoji1 from '../Images/bitmoji1.png';

const Home = () => {
    return ( 
        <React.Fragment>
            <div id="home" className="home">
                <h1>Welcome to my portfolio!</h1>
                <img src={bitmoji1} alt="Bitmoji" />
            </div>
        </React.Fragment>
     );
}
 
export default Home;