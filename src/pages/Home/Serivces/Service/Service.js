import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Service.css'

const Service = ({ service }) => {
    return (
        <Col md={4} sm={12}>
            <Card className='p-1'>
                <Card.Img variant="top" src={service.img} />
                <Card.Body className='text-center'>
                    <Card.Title>{service.name}</Card.Title>
                    <small className='card-price'>{service.price} BDT</small>
                    <Card.Text className='mt-3'>
                        {service.description}
                    </Card.Text>
                    <Button className='service__btn'>Proced To Pay</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;