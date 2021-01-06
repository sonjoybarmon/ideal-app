import React from 'react';
import Header from './Header';
import HomeImages from './HomeImages';
import HomeSlider from './HomeSlider';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Header />
            <HomeSlider />
            <Services />
            <HomeImages />
        </div>
    );
};

export default Home;