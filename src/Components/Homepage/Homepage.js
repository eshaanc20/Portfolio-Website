import React from 'react';
import './Homepage.css';
import ProfilePicture from '../../Assets/profilePicture.jpg';
import {IoLogoLinkedin, IoLogoGithub} from 'react-icons/io';
import Typing from 'react-typing-animation';
import Button from '@material-ui/core/Button';
import Resume from '../../Eshaan_Chaudhari_Resume.pdf';

const homepage = () => {
    return(
        <div className = 'homepage'>
            <img className='profile' alt='' src={ProfilePicture}/>
            <Typing speed={100}>
                <p className='name'>Eshaan Chaudhari</p>
            </Typing>
            <p className='p1'>Software Engineering and Management Student</p>
            <p className='p1'>McMaster University</p>
            <a className='connect' href = 'https://linkedin.com/in/eshaan-chaudhari'>
                <IoLogoLinkedin/>
            </a>
            <a className='connect' href = 'https://github.com/eshaanc20'>
                <IoLogoGithub className='connect'/>
            </a>
            <div>
            <Button 
                    variant='contained'
                    style={{
                        backgroundColor:'darkcyan',
                        marginRight:'20px',
                        color: 'white'
                    }}
                    href = {Resume}
                    target = '_blank'
                >View Resume</Button>
                <Button 
                    variant='contained' 
                    style={{
                        backgroundColor:'darkgreen',
                        color: 'white'
                    }}
                ><a href='/contact' style={{textDecoration:'none', color:'white'}}>Contact</a>
                </Button>
            </div>
        </div>
    );
}

export default homepage;