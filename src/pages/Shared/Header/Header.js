import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import {GiCommercialAirplane} from 'react-icons/gi'
import auth from '../../../firebase.init';
import './header.css'

const Header = () => {

    const [user] = useAuthState(auth);

    return (
        <div>
            <Navbar expand="lg" className='shadow-sm'>
                <Container>
                    <Navbar.Brand as={Link} to="/"> <i>Go <span><GiCommercialAirplane className='navbar-brand-icon' /></span> T</i>ravel </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-md-auto text-center">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>

                            {
                                user ?
                                    <button onClick={ () => signOut(auth)} className='btn sign__out-btn'>Sign Out</button>
                                : <Nav.Link as={Link} to="/login">Sign In</Nav.Link>
                            }

                            {
                                !user && <Nav.Link as={Link} to="/register">Sign Up</Nav.Link>
                            }


                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;