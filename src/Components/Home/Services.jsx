import React from 'react';
import { Card } from 'react-bootstrap';

const Services = () => {
    return (
        <div style={{padding : '50px 0'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h1 style={{color : '#5f5e5e', margin : '10px 0'}}>
                            Welcome to Ideal
                        </h1>
                        <h1 style={{color : '#F67E1C' , margin : '10px 0'}}>
                            Heating & Cooling Services Inc.
                        </h1>
                        <p className ='my-3' style={{fontSize : '16px'}}>
                            Ideal Heating & Cooling Solutions Inc. provides residential and commercial services including repairs, maintenance, and installations with friendly service at a competitive price. With over a decade of experience, we are specialized in air conditioning repair, ventilation service, gas line work, fireplaces installation, furnace work, ductwork, or other HVAC services.
                        </p>
                        
                        <p className ='my-3'> 
                        <strong style={{fontSize : '18px'}}>
                            We are committed to providing top-quality HVAC repair and services to our clients
                        </strong>
                        </p>

                        <p className ='my-3' style={{fontSize : '16px'}}>
                            Our team of HVAC experts and technicians are highly experienced, knowledgeable, and well equipped to provide high-quality heating, furnace, and air conditioning installations, repairs, and other services.
                        </p>
                        <p className ='my-3' style={{fontSize : '16px'}}>
                            We service and install furnaces, air conditioners, water heaters, air quality equipment including humidifiers, and fireplaces
                        </p>


                    </div>
                    <div className='col-md-5 d-flex' style={{flexWrap: 'wrap'}}>
                        <Card style={{width : '45%', margin : '10px', borderRadius : '12px' , textAlign: 'center'}}>
                            <Card.Body style={{padding : '15px'}}>
                                <Card.Title style={{color : '#205088',fontSize: '25px' , fontWeight: '600'}}>
                                Furnace
                                </Card.Title>
                                <Card.Text>
                                High-efficiency furnaces, designed to help keep your family safe and warm throughout the year.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    
                        <Card style={{width : '45%', margin : '10px', borderRadius : '12px' , textAlign: 'center'}}>
                            <Card.Body style={{padding : '15px'}}>
                                <Card.Title style={{color : '#205088',fontSize: '25px' , fontWeight: '600'}}>
                                Air Conditioner
                                </Card.Title>
                                <Card.Text>
                                We provide a range of quiet, efficient, and environmentally-friendly air conditioning products at a great price.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        
                            <Card style={{width : '45%', margin : '10px', borderRadius : '12px' , textAlign: 'center'}}>
                                <Card.Body style={{padding : '15px'}}>
                                    <Card.Title style={{color : '#205088', fontSize: '25px' , fontWeight: '600'}}>
                                    Tankless Water Heaters
                                    </Card.Title>
                                    <Card.Text>
                                    Get models that provide endless supply of hot water . No need for large spaces as tankless water heaters can fit into smaller areas.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        
                            <Card style={{width : '45%', margin : '10px', borderRadius : '12px' , textAlign: 'center'}}>
                                <Card.Body style={{padding : '15px'}}>
                                    <Card.Title style={{color : '#205088',fontSize: '25px' , fontWeight: '600'}}>
                                    Water Softeners
                                    </Card.Title>
                                    <Card.Text>
                                    Our team can provide full installation, as well as offer ongoing service and maintenance for your water heater.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Services;
