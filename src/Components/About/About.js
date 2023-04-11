import React from "react";
import { Nav, Card } from 'react-bootstrap';
import './About.css';





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
import Footer from '../Footer/Footer';





const About = () => {
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
                    <div className="testimonial">
                <div>
                    <h4>Testimonial</h4>
                    <h1>What Our Patients Say</h1>
                    <div className="testimonialDetails">
                        <Card style={{ width: '21rem', border: "none", boxShadow: "5px 5px 10px lightGray" }}>
                            <Card.Body style={{ textAlign: "center" }}>
                                <Card.Text>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, corporis molestiae maiores nihil dicta expedita ipsum, reiciendis natus eligendi libero sit quisquam quod ut nostrum voluptate accusamus atque dolorem maxime.
                                </Card.Text>
                            </Card.Body>
                            <Card.Header style={{ border: "none", display: "flex" }}>
                                <img src={ellips1} alt="" />
                                <div className="patientinfo">
                                    <p>John</p>
                                    <p>Coimbatore</p>
                                </div>
                            </Card.Header>
                        </Card>
                        <Card style={{ width: '21rem', border: "none", boxShadow: "5px 5px 10px lightGray" }}>
                            <Card.Body style={{ textAlign: "center" }}>
                                <Card.Text>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, corporis molestiae maiores nihil dicta expedita ipsum, reiciendis natus eligendi libero sit quisquam quod ut nostrum voluptate accusamus atque dolorem maxime.
                                </Card.Text>
                            </Card.Body>
                            <Card.Header style={{ border: "none", display: "flex" }}>
                                <img src={ellips1} alt="" />
                                <div className="patientinfo">
                                    <p>Varun</p>
                                    <p>Chennai</p>
                                </div>
                            </Card.Header>
                        </Card>
                        <Card style={{ width: '21rem', border: "none", boxShadow: "5px 5px 10px lightGray" }}>
                            <Card.Body style={{ textAlign: "center" }}>
                                <Card.Text>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, corporis molestiae maiores nihil dicta expedita ipsum, reiciendis natus eligendi libero sit quisquam quod ut nostrum voluptate accusamus atque dolorem maxime.
                                </Card.Text>
                            </Card.Body>
                            <Card.Header style={{ border: "none", display: "flex" }}>
                                <img src={ellips1} alt="" />
                                <div className="patientinfo">
                                    <p>Priya</p>
                                    <p>Coimbatore</p>
                                </div>
                            </Card.Header>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="ourBlog">
                <div>
                    <h4>Our Blog</h4>
                    <h1>From Our Blog News</h1>
                    <div className="ourBlogDetails">
                        <Card style={{ width: '21rem', border: "none", boxShadow: "5px 5px 10px lightGray" }}>
                            <Card.Body>
                                <p style={{ fontSize: "20px", fontWeight: "600", marginBottom: "-5px" }}>Dr.Jessie</p>
                                <p>February 2023</p>
                                <p style={{ fontSize: "20px", fontWeight: "700", marginTop: "30px" }}>Take a check up at least once in a year for your body.</p>
                                <FontAwesomeIcon style={{ fontSize: "30px", marginTop: "50px" }} icon={faLongArrowAltRight} />
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '21rem', border: "none", boxShadow: "5px 5px 10px lightGray" }}>
                            <Card.Header style={{ border: "none", display: "flex" }}>
                                <img src={ellips1} alt="" />
                                <div className="doctorinfo">
                                    <p>Dr. Sam</p>
                                    <p>January 2023</p>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <p style={{ fontSize: "20px", fontWeight: "700" }}>Personal Hygine that promotes healthy life </p>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint consequuntur non beatae alias dolorem!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '21rem', border: "none", boxShadow: "5px 5px 10px lightGray" }}>
                            <Card.Header style={{ border: "none", display: "flex" }}>
                                <img src={ellips1} alt="" />
                                <div className="doctorinfo">
                                    <p>Dr. Paul</p>
                                    <p>January 2023</p>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <p style={{ fontSize: "20px", fontWeight: "700" }}>Foods that pave way for healthy life</p>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint consequuntur non beatae alias dolorem!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="ourDoctors">
                <div>
                    <h4>Our Doctors</h4>
                    <div className="ourDoctorsDetails">
                        <Card style={{ width: '21rem', border: "none" }}>
                            <img style={{ height: "300px" }} src={drImage} alt="" />
                            <div className="doctorsInfo">
                                <p>Dr. Sam</p>
                                <p><FontAwesomeIcon icon={faPhoneAlt} /> +91 9788349110</p>
                            </div>
                        </Card>
                        <Card style={{ width: '21rem', border: "none" }}>
                            <img style={{ height: "300px" }} src={drImage} alt="" />
                            <div className="doctorsInfo">
                                <p>Dr. Paul</p>
                                <p><FontAwesomeIcon icon={faPhoneAlt} /> +91 9865678748</p>
                            </div>
                        </Card>
                        <Card style={{ width: '21rem', border: "none" }}>
                            <img style={{ height: "300px" }} src={drImage} alt="" />
                            <div className="doctorsInfo">
                                <p>Dr. Willson</p>
                                <p><FontAwesomeIcon icon={faPhoneAlt} /> +91 8248817402</p>
                            </div>
                        </Card>
                    </div>
                </div>
                <iframe  align="right" width="250" height="300" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/748de277-19ed-4cbe-85f4-4ebcfeaea89b"></iframe>
            </div>
                
</div>   
            </div>
            
        </div>
        
    )
}
export default About;