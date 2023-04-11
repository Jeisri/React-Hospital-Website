import React from "react";
import { Nav, Card } from 'react-bootstrap';
import './Service.css';
import Footer from '../Footer/Footer';


const Dental = () => {
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
                            <Nav.Link className="navLink" href="/contact">Contact Us</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <iframe  align="right" width="250" height="250" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/748de277-19ed-4cbe-85f4-4ebcfeaea89b"></iframe>
            </div>
            <Footer></Footer>
        </div>


    )
}
export default Dental;