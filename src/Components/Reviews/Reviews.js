import React from "react";
import { Nav, Card } from 'react-bootstrap';
import './Reviews.css';
import Footer from '../Footer/Footer';


const Reviews = () => {
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
                            <Nav.Link className="navLink" href="/service">Services</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navLink" href="/reviews">Reviews</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navLink" href="/contact">Contact Us</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Reviews;