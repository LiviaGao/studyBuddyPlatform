import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        // <div 
        //     style= {{
        //         backgroundImage: `url(${image})`,
        //         backgroundRepeat: 'no-repeat',
        //         height: '80vh',
        //         backgroundSize: "cover",
        //     }}
        //     className='home__container'
        // >
        //     <div className='home'>
        //         <Description />
        //         <h3>lalala</h3>
        //     </div>
        // </div>
        <div></div>
    )
}

const Description = () => {
    return (
        <div>
            <h1 className='description__title'>Who are we?</h1>
            <p className='description__content'>4 NUS student try to help students form study groups</p>
        </div>
    );
}



export default Home; 