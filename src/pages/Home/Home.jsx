import React from 'react';
import "./home.css"
import Navigation from '../../components/Navigation/Navigation';
import Banner from './Banner';
import PhoneListContainer from '../../components/PhoneListContainer/PhoneListContainer';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <hr  className='container break-line border border-1 border-dark'/>
            <Banner/>
            <PhoneListContainer/>
        </div>
    );
};

export default Home;