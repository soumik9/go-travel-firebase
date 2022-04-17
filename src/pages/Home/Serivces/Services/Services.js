import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './services.css'

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

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