import React from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import '../auth.css'
import {SiFacebook} from 'react-icons/si'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import {RiLoginCircleLine} from 'react-icons/ri'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="form__container my-5">
            <Container>
                <Row className='justify-content-center align-items-center'>
                    <Col md={6} lg={5}>

                        <div className="form card ">

                            <div className="d-flex justify-content-center">
                                <div><h2 className="form__title ">Login</h2></div> 
                            </div>
                            
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3">
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control type="password" placeholder="Password" />
                            </FloatingLabel>

                            <div className="form__terms d-flex justify-content-center">
                                <Form.Group className="my-3" id="formGridCheckbox">
                                    <Form.Check inline type="checkbox" id='remember' label="Remember Me" />
                                </Form.Group>
                            </div>


                            <button className='btn form__btn'>
                                Login 
                                <RiLoginCircleLine className='form__btn-icon' />
                            </button>

                            <div className="form__detail mt-3 d-flex justify-content-center">
                                <p>If you haven't account <Link to="/register">Create account here</Link></p>
                            </div>

                            <div className="form__or d-flex">
                                <div className='w-100 form__or-hr'><hr /></div>
                                <div className='mx-2 mt-1 or'>OR</div>
                                <div className='w-100 form__or-hr'><hr /></div>
                            </div>

                            <div className="form__socials mt-2 d-flex justify-content-center">
                                <div className='mx-3'>
                                    <button>
                                    <SiFacebook className='form__socials-icon facebook__icon' />
                                    </button>
                                </div>
                                <div className='mx-3'>
                                    <button>
                                    <AiFillTwitterCircle className='form__socials-icon twitter__icon' />
                                    </button>
                                </div>
                                <div className='mx-3'>
                                    <button>
                                    <FcGoogle className='form__socials-icon google__icon' />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;