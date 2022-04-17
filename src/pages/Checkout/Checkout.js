import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Checkout = () => {

    let { serviceID } = useParams();

    return (
        <div className='checkout__container'>
            <Container>
                this is checkout {serviceID}
            </Container>
        </div>
    );
};

export default Checkout;