import React from 'react';
import './Navigation.css';

const navigation = (props) => {
    return(
        <div className = 'navigation' style={{backgroundColor:'black', color:'white'}}>
            <p className='navigationName'>Eshaan</p>
            <div className = 'Nav'>
                <a className='nav' href='/'>Home</a>
                <a className='nav' href='/education'>Education</a>
                <a className='nav' href='/experience'>Experience</a>
                <a className='nav' href='/skills'>Skills</a>
                <a className='nav' href='/projects'>Projects</a>
                <a className='nav' href='/online-courses'>Online courses</a>
                <a className='nav'href='/contact'>Contact</a>
            </div>
        </div>
    );
}

export default navigation;