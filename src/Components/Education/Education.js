import React from 'react';
import './Education.css';
import Info from './Info.js';
import Courses from './Courses.js';

const education = () => {
    return(
        <div className='education'>
            <Info/>
            <Courses/>
        </div>
    );
}

export default education;