import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo1 from '../../Images/logo.jpeg';
import logo2 from '../../Images/logo2.png';
const Header = () => {
    return (
        <>
        {/* top header */}
            <div className="row" style={{backgroundColor : '#FFFFFF' , margin: '0' , padding: '5px 0'}}>
                <div className='container'>
                    <div className="col-md-12">
                    <div className='d-flex justify-content-between'>
                            <div>
                                <img src={logo1} alt="logo"/>
                            </div>
                            <div className='d-flex'>
                                <div className='d-flex justify-content-center' style={{flexDirection :'column'}}>
                                    <p style={{fontSize:'30px', textAlign:'right', margin:'0'}}>
                                        Ph: 905-744-9000
                                    </p>
                                    <p style={{fontSize:'26px', textAlign:'right', margin:'0'}}>
                                        info@idealheatingcooling.com
                                    </p>
                                </div>
                                <div style={{marginLeft : '15px'}}>
                                    <img src={logo2} alt="logo"/>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
{/* nav bar menu */}
            <Navbar expand="lg" style={{backgroundColor : '#235DA3'}}>
                <div className="container">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <li className="menu_li">
                                <NavLink activeClassName='text-primary' to='/home'  className="MenuContent">
                                Home
                                </NavLink>
                            </li>
                            <li className="menu_li">
                                <NavLink activeClassName='text-primary' to='/about'  className="MenuContent">
                                About Us
                                </NavLink>
                            </li>
                            <li className="menu_li">
                                <NavLink activeClassName='text-primary' to='/service' className="MenuContent">
                                    Services
                                </NavLink>
                            </li>
                            <li className="menu_li">
                                <NavLink activeClassName='text-primary' to='/gallery' className="MenuContent" >
                                Photo Gallery
                                </NavLink>
                            </li>
                            <li className="menu_li">
                                <NavLink activeClassName='text-primary' to='/testimonial' className="MenuContent" >
                                Testimonials
                                </NavLink>
                            </li>
                            <li className="menu_li">
                                <NavLink activeClassName='text-primary' to='/contact' className="MenuContent" >
                                Contact
                                </NavLink>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            
        </>
    );
};

export default Header;