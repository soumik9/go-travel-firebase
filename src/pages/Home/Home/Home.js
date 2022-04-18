import React from 'react';
import Slides from '../Slider/Slides/Slides';
import Services from '../Serivces/Services/Services';
import { Toaster } from 'react-hot-toast';


const Home = () => {
    return (
        <div>
            <Toaster />
            <Slides></Slides>
            <Services></Services>
        </div>
    );
};

export default Home;