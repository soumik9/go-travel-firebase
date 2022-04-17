import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './slides.css'

const Slides = () => {

    const [slides, setSlides] = useState([]);

    useEffect(() => {
        fetch("slides.json")
            .then(res => res.json())
            .then(data => setSlides(data));
    }, [])

    return (
        <div className='slide__container'>
            <Carousel>
                {
                    slides.map(slide => (
                        <Carousel.Item  key={slide.id}>
                        <img 
                            className="w-100 img-fluid slide-img"
                            
                            src={slide.img}
                            alt={slide.title}
                        />
                        <Carousel.Caption>
                            <h3>{slide.title}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    );
};

export default Slides;