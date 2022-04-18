import React, { useState } from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import '../auth.css'
import {RiLoginCircleLine} from 'react-icons/ri'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {

    let location = useLocation();
    let navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const [valueError, setValueError] = useState("");

    let from = location.state?.from?.pathname || "/";

    const handleEmailPasswordLogin = (event) => {
        event.preventDefault();
    
        const email = event.target.email.value;
        const password = event.target.password.value;

        if(email === '' && password === ''){
            setValueError("Email & Password filed is required");
        }else if(email === ''){
            setValueError("Email filed is required");
        }else if(password === ''){
            setValueError("Password filed is required");
        }else if(password.length <6 ){
            setValueError("Password needs atleast 6 words");
        }else{
            setValueError('');
            const logged = signInWithEmailAndPassword(email, password);

            if(logged){
                event.target.email.value = '';
                event.target.password.value = '';
                signInWithEmailAndPassword(email, password)

                navigate(from, { replace: true });
                
                // toast.success('Successfully User created!', {
                //     duration: 1000,
                //     position: 'top-right',
                // });
            }
        }

       
    }

    return (
        <div className="form__container my-5">
            <Container>
                <Row className='justify-content-center align-items-center'>
                    <Col md={6} lg={5}>

                        <form className="form card" onSubmit={handleEmailPasswordLogin}>

                            <div className="d-flex justify-content-center">
                                <div><h2 className="form__title ">Login</h2></div> 
                            </div>

                            {
                                valueError &&   <div className="form__error d-flex justify-content-center mb-3">
                                                    <small className='text-danger'>{valueError}</small>
                                                </div>
                            }
                            
                            <FloatingLabel
                                controlId="email"
                                label="Email address"
                                className="mb-3">
                                <Form.Control type="email" placeholder="soumik@example.com" />
                            </FloatingLabel>
                            <FloatingLabel controlId="password" label="Password">
                                <Form.Control type="password" placeholder="Password" />
                            </FloatingLabel>

                            <div className="form__terms d-flex justify-content-center">
                                <Form.Group className="my-3" id="formGridCheckbox">
                                    <Form.Check inline type="checkbox" id='remember' label="Remember Me" />
                                </Form.Group>
                            </div>


                            <button className='btn form__btn' type="submit">
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

                            {/* social login components */}
                            <SocialLogin></SocialLogin>
                        </form>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;