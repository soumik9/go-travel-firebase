import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './about.css'
import ME from '../../images/me.JPG'

const About = () => {
    return (
        <section className='about__container my-5'>
            <Container>
                <Row className='justify-content-around align-items-center'>
                    <Col md={5}>
                        <div className="about__img">
                            <img className='img-fluid' src={ME} alt="" />
                        </div>
                    </Col>
                    <Col md={4}> 
                        <div className="about__details mt-3 mt-md-0">
                            <h3 className='text-center mb-2'>Soumik Ahammed</h3>
                            <p>I am self-motivated, a quick learner and hard worker, disciplined person. I have completed my bachelor's degree "Bsc in Computer Science & Engineering" from Varendra University Rajshahi. My hobbies are listening to music, playing cricket and coding.</p>

                            <p className='mt-3'>My goal is to be a Full Stack Web Developer. Working towards my goals and dreams can be challenging that's why I am giving my best to achieve my dream. I am giving 5-7 hours per day to achieve my goal and try to find what should I do next. My strength is I have always enjoyed coding and solving problems. </p>
                        </div>
                    </Col>
                </Row>
            </Container> 
        </section>
    );
};

export default About;