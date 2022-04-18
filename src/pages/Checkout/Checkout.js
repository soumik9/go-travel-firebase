import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { RiLoginCircleLine } from 'react-icons/ri'
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import './checkout.css'
import toast, { Toaster } from 'react-hot-toast';

const Checkout = () => {

    let { serviceID } = useParams();
    const [valueError, setValueError] = useState("");

    const handleUserOrderData = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const address = event.target.address.value;
        const mobile = event.target.mobile.value;

        if (name === '') {
            setValueError("Name filed is required");
        } else if (email === '') {
            setValueError("Email filed is required");
        } else if (address === '') {
            setValueError("Address filed is required");
        } else if (mobile === '') {
            setValueError("Mobile filed is required");
        } else {
            setValueError('');

            event.target.name.value = '';
            event.target.email.value = '';
            event.target.address.value = '';
            event.target.mobile.value = '';

            toast.success('Order Details Submitted!', {
                duration: 1000,
                position: 'top-right',
            });
        }
    }

    return (
        <div className='order__container my-5'>

            <Toaster></Toaster>

            <Container>
                <Row className='justify-content-center align-items-center' style={{ height:'370px' }}>
                    <Col md={8} >

                        <div className="card">

                            <div className="d-flex justify-content-center mb-2">
                                <div><h2 className="form__title ">Order {serviceID}</h2></div>
                            </div>

                            {
                                 // checking all errors and if any error shows here
                                valueError &&   <div className="form__error d-flex justify-content-center mb-3">
                                                    <small className='text-danger'>{valueError}</small>
                                                </div>
                            }

                            <form onSubmit={handleUserOrderData}>
                                <Row>
                                    <Col>
                                        <FloatingLabel controlId="name" label="Your Name" className="mb-3">
                                            <Form.Control type="text" placeholder="Soumik" />
                                        </FloatingLabel>
                                    </Col>

                                    <Col>
                                        <FloatingLabel controlId="email" label="Your Email" className="mb-3">
                                            <Form.Control type="email" placeholder="soumik@gmail.com" />
                                        </FloatingLabel>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <FloatingLabel controlId="address" label="Address" className="mb-3">
                                            <Form.Control type="text" placeholder="Address" />
                                        </FloatingLabel>
                                    </Col>

                                    <Col>
                                        <FloatingLabel controlId="mobile" label="Mobile" className="mb-3">
                                            <Form.Control type="text" placeholder="Address" />
                                        </FloatingLabel>
                                    </Col>
                                </Row>

                                <button className='btn form__btn' type="submit">
                                    Submit
                                    <RiLoginCircleLine className='form__btn-icon' />
                                </button>
                            </form>



                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Checkout;