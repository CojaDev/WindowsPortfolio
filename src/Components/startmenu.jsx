import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const StartMenu = () => {
  return (
    <div className="startMenu">
      <div className="leftside">
        <div className="menuItem Start">
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
          <div className="github"></div>
        </div>
      </div>
      <div className="rightside"></div>
    </div>
  );
};
export default StartMenu;
