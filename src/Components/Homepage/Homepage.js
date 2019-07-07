import React from 'react';
import './Homepage.css';
import ProfilePicture from '../../Assets/profilePicture.jpg';
import {IoLogoLinkedin, IoLogoGithub} from 'react-icons/io';
import Button from '@material-ui/core/Button';

const homepage = () => {
    return(
        <div className = 'homepage'>
            <img className='profile' alt='' src={ProfilePicture}/>
            <p className='name'>Eshaan Chaudhari</p>
            <p className='p1'>Software Engineering and Management Student</p>
            <p className='p1'>McMaster University</p>
            <a className='connect'>
                <IoLogoLinkedin/>
            </a>
            <a className='connect'>
                <IoLogoGithub className='connect'/>
            </a>
            <div>
                <Button 
                    variant='contained' 
                    style={{
                        marginRight:'20px', 
                        backgroundColor:'darkgreen',
                        color: 'white'
                    }}
                >Contact</Button>
                <Button 
                    variant='contained'
                    style={{
                        backgroundColor:'darkcyan',
                        color: 'white'
                    }}
                >View Resume</Button>
            </div>
        </div>
    );
}

export default homepage;