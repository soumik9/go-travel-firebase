import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div className='not__found__container'>
            <Container>
                <Row className='justify-content-around'>
                    <Col md={10}>
                        <img className='img-fluid' style={{ height:"467px" }} src="https://i.ibb.co/4fkHSbT/404-pages.jpg" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NotFound;