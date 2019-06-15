import React from 'react';
import './Navigation.css';

const navigation = (props) => {
    return(
        <div className = 'navigation'>
            <p className='navigationName'>Eshaan</p>
            <div className = 'Nav'>
                <a href='/contact'>Contact</a>
                <a href='/online-courses'>Online courses</a>
                <a href='/projects'>Projects</a>
                <a href='/skills'>Skills</a>
                <a href='/experience'>Experience</a>
                <a href='/education'>Education</a>
                <a className='homeLink' href='/'>Home</a>
            </div>
        </div>
    );
}

export default navigation;