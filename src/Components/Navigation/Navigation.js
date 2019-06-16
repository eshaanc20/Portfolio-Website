import React from 'react';
import './Navigation.css';

const navigation = (props) => {
    return(
        <div className = 'navigation'>
            <p className='navigationName'>Eshaan</p>
            <div className = 'Nav'>
                <a href='/'>Home</a>
                <a href='/education'>Education</a>
                <a href='/experience'>Experience</a>
                <a href='/skills'>Skills</a>
                <a href='/projects'>Projects</a>
                <a href='/online-courses'>Online courses</a>
                <a href='/contact'>Contact</a>
            </div>
        </div>
    );
}

export default navigation;