import React from 'react';
import './Navigation.css';
import AppBar from '@material-ui/core/AppBar';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navigation = () => {
    return(
        <AppBar style={{backgroundColor: '#16549c'}}>
            <div className='Navigation'>
                <p style={{fontSize: '20px', marginLeft: '20px'}}>Eshaan</p>
                <div className='Navigation-options'>
                    <a className="navigation-option">Education</a>
                    <a className="navigation-option">Experience</a>
                    <a className="navigation-option">Skills</a>
                    <a className="navigation-option">Projects</a>
                    <a className="navigation-option">Certifications</a>
                    <a className="navigation-option">Contact</a>
                </div>
            </div>
        </AppBar>
    )
}

export default Navigation;