import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './services.css'

const Service = () => {
    return (
        
        <section className='services__container my-5'>
            <Container>
                <Row>
                    <Col>
                        <Card className='p-1'>
                            <Card.Img variant="top" src="https://i.ibb.co/68JXmc2/time-to-travel-and-flight-booking-vector-29639868.jpg" />
                            <Card.Body className='text-center'>
                                <Card.Title>Flight Bookings</Card.Title>
                                <small>1500 BDT</small>
                                <Card.Text className='mt-2'>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button className='service__btn'>Proced To Pay</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        </section>
    );
};

export default Service;