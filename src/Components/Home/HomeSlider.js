import React from 'react';
import { Card } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import banner1 from '../../Images/banner1.png';
import banner2 from '../../Images/banner2.png'


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const HomeSlider = () => {
    return (
        <div>
            <Carousel 
                showDots={true}
                infinite
                autoPlay
                autoPlaySpeed={5000}
                responsive={responsive}
            >
                <Card>
                    <Card.Img variant="top" src={banner1} className="img-fluid w-97" style={{height: '73vh'}}/>
                </Card>
                <Card >
                    <Card.Img variant="top" src={banner1} className="img-fluid w-97" style={{height: '73vh'}}/>
                </Card>
            </Carousel>
        </div>
    );
};

export default HomeSlider;
