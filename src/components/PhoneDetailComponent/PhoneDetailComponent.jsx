import axios from 'axios';
import "./phonedetails.css"
import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedPhone } from '../../redux/actions/phonesActions';
import Navigation from '../Navigation/Navigation';
import { removeSelectedPhone } from './../../redux/actions/phonesActions';

const PhoneDetailComponent = () => {

    const phone = useSelector(state => state.phone);
    const {title, description, image, colors, price} = phone;
    const {id} = useParams(); // Get the id
    const dispatch = useDispatch(); // Create Dispatcher

    // Now fetch data according to that id
    const fetchPhoneDetail = async () => {
        const res = await axios.get(`https://aqueous-savannah-92960.herokuapp.com/phones/${id}`).catch(err => {
            console.log("Error fetching phone: ", err);
        });
        dispatch(selectedPhone(res.data));
    }

    useEffect(() => {
        if(id && id !== "") fetchPhoneDetail(); // If id is not empty, fetch the phone
        return() => {
            dispatch(removeSelectedPhone());
        }
    } , [id]);

    return (
        <>
        <Navigation/>
        <div className='phone-details mt-5 pt-5'>
      {Object.keys(phone).length === 0 ? (
        <div className='mx-auto'><Spinner animation="grow" variant="dark" /></div>
      ) : (
        <div className="card mb-3 shadow-lg rounded-2">
            <div className="row g-0">
                <div className="col-md-8 col-lg-8 col-sm-12">
                <img src={image} className="phone-img rounded-start" alt={image}/>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12 text-body">
                <div className="phone-body">
                    <h1 className="card-title fw-bold fs-1 mb-3">{title}</h1>
                    <h2 className='price fs-2 mb-3'>${price}</h2>
                    <p className="card-text fs-5 mb-3 fw-light">{description}</p>
                    <p className="card-text">Colors Available: <span className='fw-bolder'>{colors}</span></p>
                </div>
                </div>
            </div>
        </div>
      )}
    </div>
    </>
    );
};

export default PhoneDetailComponent;