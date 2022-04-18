import React from 'react';
import Slides from '../Slider/Slides/Slides';
import Services from '../Serivces/Services/Services';
import { Toaster } from 'react-hot-toast';
import ContactUs from '../ContactUs/ContactUs';


const Home = () => {
    return (
        <div>
            <Toaster />
            <Slides></Slides>
            <Services></Services>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;