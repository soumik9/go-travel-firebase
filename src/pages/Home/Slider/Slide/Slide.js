import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slide = ({ slide }) => {

    console.log(slide);
 
    return (
        <div>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide.img}
                    alt={slide.title}
                />
                <Carousel.Caption>
                    <h3>{slide.title}</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </div>
    );
};

export default Slide;