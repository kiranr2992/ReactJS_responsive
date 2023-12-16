import React,  { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './sidepanel.css'
import {  useEffect } from 'react';

const Sidebar = () => {
  const [activeSubMenu1, setActiveSubMenu1] = useState(true);
  const [activeSubMenu2, setActiveSubMenu2] = useState(true);
  const [activeSubMenu3, setActiveSubMenu3] = useState(true);
  const [activeSubMenu4, setActiveSubMenu4] = useState(true);
  const [activeSubMenu5, setActiveSubMenu5] = useState(true);
  const [activeSubMenu6, setActiveSubMenu6] = useState(true);
  const [activeSubMenu7, setActiveSubMenu7] = useState(true);

  const toggleSubMenu1 = () => {
    setActiveSubMenu1(!activeSubMenu1);
    // setActiveSubMenu2(false);
  };

  const toggleSubMenu2 = () => {
    setActiveSubMenu2(!activeSubMenu2);
    // setActiveSubMenu1(false); 
  };

  const toggleSubMenu3 = () => {
    setActiveSubMenu3(!activeSubMenu3);
  };

  const toggleSubMenu4 = () => {
    setActiveSubMenu4(!activeSubMenu4);
  };

  const toggleSubMenu5 = () => {
    setActiveSubMenu5(!activeSubMenu5);
  };

  const toggleSubMenu6 = () => {
    setActiveSubMenu6(!activeSubMenu6);
  };

  const toggleSubMenu7 = () => {
    setActiveSubMenu7(!activeSubMenu7);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth <= 790) {
        setActiveSubMenu1(false);
        setActiveSubMenu2(false);
        setActiveSubMenu3(false);
        setActiveSubMenu4(false);
        setActiveSubMenu5(false);
        setActiveSubMenu6(false);
        setActiveSubMenu7(false);
      } else {
        setActiveSubMenu1(true);
        setActiveSubMenu2(true);
        setActiveSubMenu3(true);
        setActiveSubMenu4(true);
        setActiveSubMenu5(true);
        setActiveSubMenu6(true);
        setActiveSubMenu7(true);
      }
    };

    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <p onClick={toggleSubMenu1} className="title">
          Job Type
          {activeSubMenu1 ? (
            <FontAwesomeIcon icon={faAngleDown} />
          ) : (
            <FontAwesomeIcon icon={faAngleRight} />
          )}
        </p>
        {activeSubMenu1 && (
          <div className="submenu">
            <p><span className="box" style={{backgroundColor: 'green'}}></span>Given an Offer</p>
            <p><span className="box" style={{backgroundColor: 'blue'}}></span>Interview Taken</p>
            <p><span className="box" style={{backgroundColor: 'yellow'}}></span>Interview Schedule</p>
            <p><span className="box" style={{backgroundColor: 'Orange'}}></span>Resume Download</p>
            <p><span className="box" style={{backgroundColor: 'red'}}></span>Profile review</p>
          </div>
        )}
      </div>
      <hr/>
      <div className="sidebar-item">
        <p onClick={toggleSubMenu2} className="title">
          Date Posted
          {activeSubMenu2 ? (
            <FontAwesomeIcon icon={faAngleDown} />
          ) : (
            <FontAwesomeIcon icon={faAngleRight} />
          )}
        </p>
        {activeSubMenu2 && (
          <div className="submenu">
            <p><input type="checkbox" className="box"/>Last hour</p>
            <p><input type="checkbox" className="box"/>Last 24 hour</p>
            <p><input type="checkbox" className="box"/>Last 7 days</p>
            <p><input type="checkbox" className="box"/>Last 14 days</p>
            <p><input type="checkbox" className="box"/>Last 30 days</p>
          </div>
        )}
      </div>
      <hr/>
      <div className="sidebar-item">
        <p onClick={toggleSubMenu3} className="title">
          Specialism
          {activeSubMenu3 ? (
            <FontAwesomeIcon icon={faAngleDown} />
          ) : (
            <FontAwesomeIcon icon={faAngleRight} />
          )}
        </p>
        {activeSubMenu3 && (
          <div className="submenu">
            <p><input type="checkbox" className="box"/>IT Contracter</p>
            <p><input type="checkbox" className="box"/>Educational</p>
            <p><input type="checkbox" className="box"/>Graduate</p>
            <p><input type="checkbox" className="box"/>Digital & Creativity</p>
            <p><input type="checkbox" className="box"/>Voluntary</p>
          </div>
        )}
      </div>
      <hr/>
      <div className="sidebar-item">
        <p onClick={toggleSubMenu4} className="title">
          Experience
          {activeSubMenu4 ? (
            <FontAwesomeIcon icon={faAngleDown} />
          ) : (
            <FontAwesomeIcon icon={faAngleRight} />
          )}
        </p>
        {activeSubMenu4 && (
          <div className="submenu">
            <p><input type="checkbox" className="box"/>Fresher</p>
            <p><input type="checkbox" className="box"/>Less then 1 year</p>
            <p><input type="checkbox" className="box"/>2 Year</p>
            <p><input type="checkbox" className="box"/>3 Year</p>
            <p><input type="checkbox" className="box"/>4 Year</p>
          </div>)}
      </div>
      <hr/>
      <div className="sidebar-item">
        <p onClick={toggleSubMenu5} className="title">
          Offered Salary
          {activeSubMenu5 ? (
            <FontAwesomeIcon icon={faAngleDown} />
          ) : (
            <FontAwesomeIcon icon={faAngleRight} />
          )}
        </p>
        {activeSubMenu5 && (
          <div className="submenu">
            <p><input type="checkbox" className="box"/>10k - 20k</p>
            <p><input type="checkbox" className="box"/>20k - 30k</p>
            <p><input type="checkbox" className="box"/>30k - 40k</p>
            <p><input type="checkbox" className="box"/>40k - 50k</p>
            <p><input type="checkbox" className="box"/>50k - 60k</p>
          </div>)}
      </div>
      <hr/>
      <div className="sidebar-item">
        <p onClick={toggleSubMenu6} className="title">
          Gender
          {activeSubMenu6 ? (
            <FontAwesomeIcon icon={faAngleDown} />
          ) : (
            <FontAwesomeIcon icon={faAngleRight} />
          )}
        </p>
        {activeSubMenu6 && (
          <div className="submenu">
            <p><input type="checkbox" className="box"/>Male</p>
            <p><input type="checkbox" className="box"/>Female</p>
          </div>)}
      </div>
      <hr/>
      <div className="sidebar-item">
        <p onClick={toggleSubMenu7} className="title">
          Qualification
          {activeSubMenu7 ? (
            <FontAwesomeIcon icon={faAngleDown} />
          ) : (
            <FontAwesomeIcon icon={faAngleRight} />
          )}
        </p>
        {activeSubMenu7 && (
          <div className="submenu">
            <p><input type="checkbox" className="box"/>Matriculation</p>
            <p><input type="checkbox" className="box"/>Intermidiate</p>
            <p><input type="checkbox" className="box"/>Intermidiate</p>
          </div>)}
      </div>
      <hr/>
    </div>
  );
};
function Sidepanel() {

    return (
        <div>
            <div>
                <Sidebar />
            </div>
        </div>
    )
}

export default Sidepanel;



