import React from 'react';
import "./home.css";

const Banner = () => {
    return (
        <div className='banner pb-5'>
            <h1 className='banner-title'>The Modern <span className='future-text'>Phones</span> <br /> To Shape Future.</h1>
            <p className='fs-5 mt-4 banner-desc'>Discover the latest and most sophisticated phones that will be playing a key role in shaping how modern society use mobile phones.</p>
            <a href="#discover"><button className='mt-4 shadow-lg rounded-3 border border-dark bg-dark text-white fw-bold fs-4 py-2 px-4'>Discover</button></a>
        </div>
    );
};

export default Banner;