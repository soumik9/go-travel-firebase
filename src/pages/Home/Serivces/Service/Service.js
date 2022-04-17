import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {

    const {id, img, name, price, description} = service;
    let navigate = useNavigate();

    return (
        <Col md={4} sm={12}>
            <Card className='p-1'>
                <Card.Img variant="top" src={img} />
                <Card.Body className='text-center'>
                    <Card.Title>{name}</Card.Title>
                    <small className='card-price'>{price} BDT</small>
                    <Card.Text className='mt-3'>
                        {description}
                    </Card.Text>
                    <Button className='service__btn' onClick={ () => navigate(`/checkout/${id}`) }>Proced To Pay</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;