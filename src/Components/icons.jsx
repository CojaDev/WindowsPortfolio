import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const Icons = () => {
  return (
    <div className="icons">
      <div className="icon pc">
        <p>This PC</p>
      </div>
      <div className="icon chrome">
        <p>Google Chrome</p>
      </div>
      <div className="icon folder">
        <p>Projects</p>
      </div>
      <div className="icon docx">
        <p>Resume</p>
      </div>
      <div className="icon txt">
        <p>Contact</p>
      </div>
      <div className="icon trash">
        <p>Recycle Bin</p>
      </div>
    </div>
  );
};
export default Icons;
