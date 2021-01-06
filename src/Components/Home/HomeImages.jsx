import React from 'react';
import { Card } from 'react-bootstrap';
import thumbs from '../../Images/thumbs.png';
import thumbs1 from '../../Images/thumbs-2.png';
import thumbs2 from '../../Images/thumbs-3.png';
import thumbs3 from '../../Images/thumbs-4.png'

const HomeImages = () => {
    return (
        <>
            <div style={{width : '1170px', margin : 'auto', padding : '50px 0'}}>
                <div className='row'>
                    <div className='col-md-3'>
                        <div>
                            <Card style={{border : 'none'}}>
                                <Card.Img variant="top" src={thumbs} className="img-fluid"/>
                            </Card>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div>
                            <Card style={{border : 'none'}}>
                                <Card.Img variant="top" src={thumbs1} className="img-fluid"/>
                            </Card>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div>
                            <Card style={{border : 'none'}}>
                                <Card.Img variant="top" src={thumbs2} className="img-fluid"/>
                            </Card>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div>
                            <Card style={{border : 'none'}}>
                                <Card.Img variant="top" src={thumbs3} className="img-fluid"/>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeImages;