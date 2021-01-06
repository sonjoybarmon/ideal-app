import React from 'react';
import { Card } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo from "../../Images/logo2.jpg";
import logo1 from "../../Images/logo3.jpg";
import logo2 from "../../Images/logos5.jpg";
import logo3 from "../../Images/logos6.jpg";
import logo4 from "../../Images/logos7.jpg";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};
const HomeLoge = () => {
    return (
        <div style={{padding : '30px 0'}}>
            <Carousel 
                responsive={responsive}
            >
                <Card className ='mx-3'>
                    <Card.Img variant="top" src={logo} className="img-fluid "/>
                </Card>
                <Card className ='mx-3' >
                    <Card.Img variant="top" src={logo1} className="img-fluid"/>
                </Card>
                <Card className ='mx-3'>
                    <Card.Img variant="top" src={logo2} className="img-fluid "/>
                </Card>
                <Card className ='mx-3' >
                    <Card.Img variant="top" src={logo3} className="img-fluid"/>
                </Card>
                <Card className ='mx-3'>
                    <Card.Img variant="top" src={logo4} className="img-fluid"/>
                </Card>
            </Carousel>
        </div>
    );
};

export default HomeLoge;