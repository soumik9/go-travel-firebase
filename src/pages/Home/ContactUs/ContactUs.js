import React from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import './contactus.css'

const ContactUs = () => {
    return (
        <section className='contactus__container'>
            <Container>

                <div className="d-flex justify-content-center contactus__container-title mb-3">
                    <h2>Drop a Message</h2>
                </div>

                <Row>
                    <Col md={6}>
                        <FloatingLabel controlId="name" label="Your Name" className="mb-3">
                            <Form.Control type="text" placeholder="Soumik" />
                        </FloatingLabel>

                        <FloatingLabel controlId="email" label="Your email" className="mb-3">
                            <Form.Control type="email" placeholder="soumik@gmail.com" />
                        </FloatingLabel>

                        <FloatingLabel controlId="phone" label="Your phone" className="mb-3">
                            <Form.Control type="text" placeholder="+8801689201370" />
                        </FloatingLabel>

                        
                    </Col>
                    <Col md={6}>
                        <FloatingLabel controlId="message" label="Message" className='mt-4 mt-md-0 mb-3'>
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a message here"
                                style={{ height: '140px' }}
                            />
                        </FloatingLabel>

                        <button className='btn contactus__btn' type="submit">Submit</button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactUs;