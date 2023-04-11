import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <div>
                    <div>
                        <p>Services</p>
                    </div>
                    <div>
                        <small>Emergency Care</small>
                        <br />
                        <small>Check Up</small>
                        <br />
                        <small>Treatment of Personal Diseases</small>
                        <br />
                        <small>Child Care</small>
                        <br />
                        <small>Check Up</small>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Services</p>
                    </div>
                    <div>
                        <small>Emergency Care</small>
                        <br />
                        <small>Check Up</small>
                        <br />
                        <small>Treatment of Personal Diseases</small>
                        <br />
                        <small>Child Care</small>
                        <br />
                        <small>Check Up</small>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Address</p>
                    </div>
                    <div>
                        <small>Coimbatore, India</small>
                        <div className="brandIcon">
                            <FontAwesomeIcon icon={faFacebookF} />
                            <FontAwesomeIcon icon={faGooglePlusG} />
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <small>Call Now</small>
                        <p className="callNow">+91 9788349110</p>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "30px" }}>
            </div>
        </div>
    );
};

export default Footer;