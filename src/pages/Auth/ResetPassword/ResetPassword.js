import React from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import '../auth.css'
import {RiLoginCircleLine} from 'react-icons/ri'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const ResetPassword = () => {

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    let navigate = useNavigate();

    if(sending){ return <Loading></Loading>}

    const handleResetPassword = async (event) => {

        const email = event.target.email.value;

        await sendPasswordResetEmail(email);
        navigate('/login')
        toast.success('Reset link sent! check spam if not found', {
            duration: 1000,
            position: 'top-right',
        });
    }

    return (
        <div>
            <div className="form__container my-5">
            <Container>
                <Row className='justify-content-center align-items-center' style={{ height:"370px" }}>
                    <Col md={6} lg={5}>

                        <div className="card">

                            <div className="d-flex justify-content-center">
                                <div><h2 className="form__title ">Reset Password</h2></div> 
                            </div>
                            
                            <form onSubmit={handleResetPassword}>
                                <FloatingLabel
                                    controlId="email"
                                    label="Email address"
                                    className="mb-3">
                                    <Form.Control type="email" placeholder="soumik@example.com" />
                                </FloatingLabel>

                                <button className='btn form__btn' type="submit">
                                    Reset 
                                    <RiLoginCircleLine className='form__btn-icon' />
                                </button>
                            </form>

                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
        </div>
    );
};

export default ResetPassword;