import React from "react";
import './footer.css';
import CourseImg from '../assets/course.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';


function Footer() {

    return (
        <div className="footer_container">
            <div className="footer-components">
                <div className="fthalf">
                    <div className="About">
                        <h6>About</h6>
                        <p>There are many ways to get a job. Approaches vary depending on the type of job you’re after, and the industry and competitiveness of the job. Some may find networking and personal connections effective in their job search, but many people rely on the traditional approach of applying to and interviewing for a job.</p>
                    </div>
                    <div className="Contact">
                        <h6>Contact Info</h6>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />&nbsp; 1234, Navsari, Gandevi, Ancheli</p>
                        <p><FontAwesomeIcon icon={faEnvelope} className="email-icon" />&nbsp; abc@gmail.com</p>
                        <p><FontAwesomeIcon icon={faPhone} className="phone-icon" />&nbsp; +919876543210</p>
                    </div>
                </div>

                <div className="fthalf">

                    <div className="Categories">
                        <h6>Categories</h6>
                        Find Job<br />
                        Applied Job <br />
                        Resume <br />
                        Pricing <br />
                        Messaging <br />
                    </div>
                    <div className="Course">
                        <h6>Latest Course</h6>
                        <div className="book">
                            <div className="bookimg">
                                <img src={CourseImg} alt="course" />
                            </div>
                            <div>
                                Introduction to Coding Theory<br />
                                WPY 21 2017
                            </div>
                        </div>
                        <div className="book">
                            <div className="bookimg">
                                <img src={CourseImg} alt="course" />
                            </div>
                            <div>
                                Introduction to Coding Theory<br />
                                WPY 21 2017
                            </div>
                        </div>
                        <div className="book">
                            <div className="bookimg">
                                <img src={CourseImg} alt="course" />
                            </div>
                            <div>
                                Introduction to Coding Theory<br />
                                WPY 21 2017
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: "70%", marginLeft: "15%", color: "white" }}><hr /></div>
            <div className="cpr">
                <div>@ Copyright 2022 Broder AI - Towards Automation</div>
                <div>Privacy Policy | Terms and Conditions</div>
            </div>
        </div>
    )
}

export default Footer;