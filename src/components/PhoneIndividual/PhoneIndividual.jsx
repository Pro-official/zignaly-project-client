import React from 'react';
import "./PhoneIndividual.css";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';

const PhoneIndividual = () => {

    // Get the phone from the store
    const phones = useSelector(state => state.allphones.phones);
    const phoneList = phones.map(phone => {
        const {_id, title, image, description} = phone;
        return (
                <Col key={_id}>
                    <Card className='text-decoration-none phone'>
                        <Link to={`/phones/${_id}`}><Card.Img className='phone-image ' variant="top" src={image} alt={title}/></Link>
                            <Card.Body>
                                <div className='d-flex justify-content-between align-items-center'>
                                <Card.Title className='fw-bolder phone-name'>{title}</Card.Title>
                                </div>
                                <Card.Text className='phone-desc'>
                                    {description.slice(0, 120)}... <Link className='text-decoration-none text-primary' to={`/phones/${_id}`}>View Details...</Link>
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
        )
    });

    return (
        <>
            {phoneList}
        </>
    );
};

export default PhoneIndividual;