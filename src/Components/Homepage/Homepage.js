import React from 'react';
import './Homepage.css';
import ProfilePicture from '../../Assets/profilePicture.jpg';
import {IoLogoLinkedin, IoLogoGithub} from 'react-icons/io';

const homepage = () => {
    return(
        <div className = 'homepage'>
            <img className='profile' alt='' src={ProfilePicture}/>
            <p className='name'>Eshaan Chaudhari</p>
            <p>Software Engineering and Management Student</p>
            <p>McMaster University</p>
            <a className='connect'>
                <IoLogoLinkedin/>
            </a>
            <a className='connect'>
                <IoLogoGithub className='connect'/>
            </a>
        </div>
    );
}

export default homepage;