import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import "./PhoneListContainer.css"; 
import { setPhones } from '../../redux/actions/phonesActions';
import PhoneIndividual from '../PhoneIndividual/PhoneIndividual';
import { Row } from 'react-bootstrap';

const PhoneListContainer = () => {

    const dispatch = useDispatch(); // Create Dispatcher
    // Fetch all phones 
    const fetchPhones = async () => {
        const res = await axios.get("https://aqueous-savannah-92960.herokuapp.com/phones").catch(err => {
            console.log("Error fetching phones: ", err);
        }); 
        dispatch(setPhones((res.data)));
    }; 

    useEffect(() => {
        fetchPhones();
    }, []);

    return (
        <>
        <div className='mt-5 pt-5'>
        <hr />
        <h1 className='discover' id='discover'>Discover New Beautiful Phones</h1>
        <p className='fs-5 fw-light mb-4 list-meta'>Discover the latest and most sophisticated models. <br /> These phones will shape the future.</p>
        <Row xs={1} md={2} className="g-4 container mx-auto">
            <PhoneIndividual/>
        </Row>
        </div>
        </>
    );
};

export default PhoneListContainer;