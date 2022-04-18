import React, { useState } from 'react';
import { FiUserCheck } from 'react-icons/fi'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import '../auth.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import toast, { Toaster } from 'react-hot-toast';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const [valueError, setValueError] = useState("");
    let navigate = useNavigate();

    if(user){
        navigate('/');
    }

    const handleEmailPasswordSignUp = (event) => {
        event.preventDefault();
       
        //const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if(email === '' && password === ''){
            setValueError("Email & Password filed is required");
        }else if(email === ''){
            setValueError("Email filed is required");
        }else if(password === ''){
            setValueError("Password filed is required");
        }else if(confirmPassword === ''){
            setValueError("Confirm Password filed is required");
        }else if(password.length <6 ){
            setValueError("Password needs atleast 6 words");
        }else if(confirmPassword !== password){
            setValueError("Password did not matched");
        }else{
            setValueError('');
            const created = createUserWithEmailAndPassword(email, password);

            if(created){
                event.target.name.value = '';
                event.target.email.value = '';
                event.target.password.value = '';
                event.target.confirmPassword.value = '';
                
                toast.success('Successfully User created!', {
                    duration: 1000,
                    position: 'top-right',
                });
            }
        }
    }


    return (
        <div className="form__container my-5">
            <Container>
                <Row className='justify-content-center align-items-center'>
                    <Col md={6} lg={5}>

                        <form className="form card" onSubmit={handleEmailPasswordSignUp}>

                            <Toaster  />

                            <div className="d-flex justify-content-center">
                                <div><h2 className="form__title ">Register</h2></div> 
                            </div>

                            {
                                valueError &&   <div className="form__error d-flex justify-content-center mb-3">
                                                    <small className='text-danger'>{valueError}</small>
                                                </div>
                            }
                            
                            <FloatingLabel
                                controlId="name"
                                label="Your Name"
                                className="mb-3">
                                <Form.Control type="text" placeholder="Soumik Ahammed" />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="email"
                                label="Email address"
                                className="mb-3">
                                <Form.Control type="email" placeholder="soumik@example.com" />
                            </FloatingLabel>

                            <FloatingLabel controlId="password" label="Password" className="mb-3">
                                <Form.Control type="password" placeholder="Password" />
                            </FloatingLabel>

                            <FloatingLabel controlId="confirmPassword" label="Confirm Password">
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </FloatingLabel>

                            <div className="form__terms d-flex justify-content-center">
                                <Form.Group className="my-3" id="formGridCheckbox">
                                    <Form.Check inline type="checkbox" id='remember' label="Agree to terms & conditions" />
                                </Form.Group>
                            </div>


                            <button className='btn form__btn'>
                                Register 
                                <FiUserCheck className='form__btn-icon ms-2' style={{ fontSize: "18px" }} />
                            </button>

                            <div className="form__detail mt-3 d-flex justify-content-center">
                                <p>Already have account <Link to="/login">Login here</Link></p>
                            </div>

                            <div className="form__or d-flex">
                                <div className='w-100 form__or-hr'><hr /></div>
                                <div className='mx-2 mt-1 or'>OR</div>
                                <div className='w-100 form__or-hr'><hr /></div>
                            </div>

                            {/* social login components */}
                            <SocialLogin></SocialLogin>

                        </form>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;