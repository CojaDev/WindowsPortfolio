import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const StartMenu = () => {
  //Clock
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedDate = `${
    currentDateTime.getMonth() + 1
  }/${currentDateTime.getDate()}/${currentDateTime.getFullYear()}`;

  const formattedTime = currentDateTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  //navBar Expand
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    let timeout;

    const handleMouseEnter = () => {
      timeout = setTimeout(() => {
        setIsExpanded(true);
      }, 700);
    };

    const handleMouseLeave = () => {
      clearTimeout(timeout);
      setIsExpanded(false);
    };

    const navbar = document.querySelector('.startMenu .startBar .navbar');

    navbar.addEventListener('mouseenter', handleMouseEnter);

    navbar.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      navbar.removeEventListener('mouseenter', handleMouseEnter);
      navbar.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  //startMenu Toggle
  const [isStartMenuActive, setIsStartMenuActive] = useState(false);

  const toggleStartMenuClass = () => {
    setIsStartMenuActive(!isStartMenuActive);
  };

  const toggleStartNavClass = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="startMenu">
      <div className={`startBar ${isStartMenuActive ? 'active' : ''}`}>
        <div className={`navbar ${isExpanded ? 'active' : ''}`}>
          <div className="expand" onClick={toggleStartNavClass}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <ul>
            <li className="navItem">
              <div className="profile"></div>
              <p>User</p>
            </li>
            <li className="navItem">
              <div className="documents"></div>
              <p>Documents</p>
            </li>
            <li className="navItem">
              <div className="pictures"></div>
              <p>Pictures</p>
            </li>
            <li className="navItem">
              <div className="settings"></div>
              <p>Settings</p>
            </li>
            <li className="navItem">
              <div className="power"></div>
              <p>Power</p>
            </li>
          </ul>
        </div>
        <div className="appbar"></div>
      </div>
      <div className="leftside">
        <div
          className={`menuItem Start ${isStartMenuActive ? 'active' : ''}`}
          onClick={toggleStartMenuClass}
        >
          <FontAwesomeIcon
            className="startButton"
            icon={faWindows}
          ></FontAwesomeIcon>
        </div>
        <div className="menuItem search">
          <div className="search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
        <div className="menuItem ">
          <div className="explorer"></div>
        </div>
        <div className="menuItem ">
          <div className="Chrome"></div>
        </div>
        <div className="menuItem ">
          <div className="word"></div>
        </div>
        <div className="menuItem ">
          <div className="github"></div>
        </div>
      </div>
      <div className="rightside">
        <div className="menuItem more">
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
        <div className="menuItem network">
          <div className="network"></div>
        </div>
        <div className="menuItem sound ">
          <div className="sound"></div>
        </div>
        <div className="menuItem language">
          <p>ENG</p>
        </div>
        <div className="menuItem time">
          <p className="time">{formattedTime}</p>
          <p className="date">{formattedDate}</p>
        </div>
        <div className="menuItem notification">
          <div className="notification"></div>
        </div>
        <div className="menuItem showDesktop"></div>
      </div>
    </div>
  );
};
export default StartMenu;
