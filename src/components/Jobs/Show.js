import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Joblist from "./Joblist";
import { Link, useNavigate } from "react-router-dom";
import './show.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart, faShare, faFile, faShoppingBag, faClock, faUser, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Show() {


    const percentage = 66;

    <CircularProgressbar value={percentage} text={`${percentage}%`} />;

    const coloredBox = (boxType) => {
        switch (boxType) {
            case "subscribe":
                return <button className="button" style={{ backgroundColor: "cyan", borderRadius: "5px" }}>Subscribe</button>;
            case "Open Offer":
                return <button className="button" style={{ backgroundColor: "red", borderRadius: "5px" }}>Open Offer</button>;
            case "already subscribed":
                return <button className="button" style={{ backgroundColor: "lime", borderRadius: "5px" }}>Already Subscribed</button>;
            default:
                return null;
        }
    };

    return (
        <div>
            <table>
                <div className="show-item">
                    {
                        Joblist && Joblist.length > 0
                            ?
                            Joblist.map((item) => {
                                return (
                                    <tr>
                                        <div className="title">
                                            <div className="title-left">
                                                <td>
                                                    {item.icon}
                                                </td>
                                                <td>
                                                    {item.Name}
                                                </td>
                                                <td>
                                                    {coloredBox(item.box)}
                                                </td>
                                            </div>
                                            <div className="right-icon">
                                                <td>
                                                    <div style={{ width: 37, height: 37 }}>
                                                        <CircularProgressbar value={50} text={'50%'} />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="icon2">
                                                        <FontAwesomeIcon icon={faShare} className="share-icon" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="icon2">
                                                        <FontAwesomeIcon icon={solidHeart} className="liked-heart likei" />
                                                    </div>
                                                </td>
                                            </div>
                                        </div>
                                        <div style={{ paddingLeft: '81px' }} className="smalltxt">
                                            <p>{item.txt}</p>
                                            <div className="threepart">
                                                <td><FontAwesomeIcon icon={faFile} className="file-icon" /> {item.salary}</td>
                                                <td><FontAwesomeIcon icon={faShoppingBag} className="bag-icon" /> {item.bag}</td>
                                                <td><FontAwesomeIcon icon={faClock} className="clock-icon" /> {item.clock}</td>
                                            </div>
                                            <div>
                                                <br></br>
                                                <ul>
                                                    <li>{item.l1}</li>
                                                    <li>{item.l2}</li>
                                                    <li>{item.l3}</li>
                                                </ul>
                                            </div>
                                            <div className="threepart2">
                                                <td><FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" /> {item.loc}</td>
                                                <td><FontAwesomeIcon icon={faClock} className="clock-icon" /> {item.clock}</td>
                                                <td><FontAwesomeIcon icon={faUser} className="user-icon" /> {item.use}</td>
                                            </div>
                                        </div>
                                        <hr></hr>
                                    </tr>
                                )
                            })
                            :
                            "No data available"
                    }
                </div>
            </table>

            <Button style={{ backgroundColor: "blue" }}>Show more jobs</Button>
        </div>
    )
}

export default Show;



