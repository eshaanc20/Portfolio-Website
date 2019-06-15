import React from 'react';
import './Navigation.css';

const navigation = (props) => {
    return(
        <div className = 'navigation'>
            <a>Home</a>
            <a>Education</a>
            <a>Experience</a>
            <a>Skills</a>
            <a>Projects</a>
            <a>Online courses</a>
            <a>Contact</a>
        </div>
    );
}

export default navigation;