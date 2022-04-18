import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useService from '../../../../hooks/useService';
import Service from '../Service/Service';
import './services.css'

const Services = () => {

    // using hook getting data by fetch
    const [services] = useService();

    return (
        <section className='services__container my-5'>
            <Container>

                <div className="d-flex justify-content-center services__container-title mb-3">
                    <h2>Our Services</h2>
                </div>

                <Row>

                    {
                        services.map(service => <Service 
                                key={service.id}
                                service={service}
                            ></Service>)
                    }

                </Row>
            </Container>
        </section>
    );
};

export default Services;