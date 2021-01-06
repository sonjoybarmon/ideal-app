import React from 'react';
import Header from './Header';
import HomeIcon from './HomeIcon';
import HomeImages from './HomeImages';
import HomeLoge from './HomeLoge';
import HomeSlider from './HomeSlider';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Header />
            <HomeSlider />
            <Services />
            <HomeImages />
            <HomeIcon />
            <div>
                
                <HomeLoge />
            </div>
            
        </div>
    );
};

export default Home;