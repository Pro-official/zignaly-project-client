import React from 'react';
import { Link } from 'react-router-dom';
import "./nav.css";

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-white mt-2">
                <div className="container d-flex align-items-center">
                    <Link to="/" className="navbar-brand d-flex align-items-center fw-bold">
                    <img src="/rocket-logo.svg" alt="" width="50" height="34" className="d-inline-block align-text-top"/>
                    Zignaly
                    </Link>
                    <Link className='text-decoration-none text-black signup' to="/signup"><button className='bg-white px-3 py-2 rounded-3 border border-3 border-dark fw-bold'>SIGN UP</button></Link>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;