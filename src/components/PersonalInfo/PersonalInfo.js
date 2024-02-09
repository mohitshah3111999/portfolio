import React from 'react';
import { DETAILS } from './personalInfo.constants'; // Importing constants file
import './personalInfo.css';
import photo from './myPhoto.jpeg';

const PersonalInfo = () => {
  return (
    <div>
      <img
        src={photo}
        alt="Your Name"
        className="personal-info-photo"
      />
      <div>
          <div className='full-name'>{DETAILS.FULL_NAME}</div>
          <div className='designation'>{DETAILS.DESIGNATION}</div>
      </div>
    </div>
  );
};

export default PersonalInfo;
