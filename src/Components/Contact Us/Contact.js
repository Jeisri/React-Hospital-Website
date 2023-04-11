import React from "react";
import { Nav, Card } from 'react-bootstrap';
import './Contact.css';
import Footer from '../Footer/Footer';
import Dictaphone from '../Dictaphone';
import './Contact.css';



import image from '../../images/Mask Group 1.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faPhoneAlt, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import dental from '../../images/001-dental.png';
import tooth1 from '../../images/tooth (1).png';
import tooth from '../../images/tooth.png';
import maskGroup3 from '../../images/Mask Group 3.png';
import { Button } from '@material-ui/core';
import bgRemoveDoctor from '../../images/5790-removebg.png';
import ellips1 from '../../images/Ellipse 1.png';
import drImage from '../../images/dr-image.png';


const Contact = () => {
    return (
        <div className="doctorPortal">
            <div className="doctorHeading">
                <div className="doctorNav">
                    <Nav className="justify-content-end">
                        <Nav.Item>
                            <Nav.Link className="navLink" href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navLink" href="about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navLink" href="/contact">Contact Us</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <br/>
                    <div className="Location">
                        <br/>
                        <br/>
                        <br/>
                    <h2>Track the location of the hospital:</h2>
                    <br/>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.494514218391!2d77.13983001377096!3d11.076474156614829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8ff7a08d662bb%3A0x81c68f2ddd8c1dfa!2sKPR%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1676315021250!5m2!1sen!2sin" width="1300" height="500" style={{ border: "50" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
        </div>
        <br/>
        <div className="contactUs">
                <div>
                    <h4>Contact Us</h4>
                    <h1>Always contact with us</h1>
                    <div className="contactUsDetails">
                        <div>
                            <input placeholder="Email Address*" type="text" />
                            <br />
                            <input placeholder="Subject*" type="text" />
                            <br />
                            <input placeholder="Your Message*" type="text"  />
                            <br />
                            <Dictaphone/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <br/>
            <br/>
            <br/>

            <div>
            
           </div>
           <Footer></Footer>
        </div>
        
    )
}
export default Contact;