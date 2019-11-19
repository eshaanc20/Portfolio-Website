import React from 'react';
import './Homepage.css';
import ProfilePicture from '../../Assets/profilePicture.jpg';
import {IoLogoLinkedin, IoLogoGithub} from 'react-icons/io';
import Typing from 'react-typing-animation';
import Button from '@material-ui/core/Button';
import Resume from '../../Eshaan_Chaudhari_Resume.pdf';

const Homepage = () => {
    return(
        <div className = 'homepage'>
            <img className='profile' alt='' src={ProfilePicture}/>
            <p className='name'>Eshaan Chaudhari</p>
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
                        backgroundColor:'#0889a3',
                        marginRight:'20px',
                        color: 'white',
                        fontSize: '16px'
                    }}
                    href = {Resume}
                    target = '_blank'
                >View Resume</Button>
                <Button 
                    variant='contained' 
                    style={{
                        backgroundColor:'#0972b8',
                        color: 'white',
                        fontSize: '16px'
                    }}
                ><a href='/contact' style={{textDecoration:'none', color:'white'}}>Contact</a>
                </Button>
            </div>
        </div>
    )
}

export default Homepage;