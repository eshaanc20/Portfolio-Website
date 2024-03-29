import React from 'react';
import './Homepage.css';
import ProfilePicture from '../../Assets/profilePicture.jpg';
import {IoLogoLinkedin, IoLogoGithub} from 'react-icons/io';
import Button from '@material-ui/core/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
import Resume from '../../Assets/Eshaan_Chaudhari_Resume.pdf';

AOS.init();

const Homepage = () => {
    return(
        <div className='homepage'>
            <div className='homepage-title'>
                <div className='homepage-content' data-aos='fade-up'>
                    <p className='name'>Eshaan Chaudhari</p>
                    <p className='p1'>Software Engineering and Management Student</p>
                    <p className='p1'>McMaster University</p>
                    <div className='more-info'>
                        <a className='connect' href = 'https://linkedin.com/in/eshaan-chaudhari'>
                            <IoLogoLinkedin/>
                        </a>
                        <a className='connect' href = 'https://github.com/eshaanc20'>
                            <IoLogoGithub className='connect'/>
                        </a>
                    </div>
                    <div className='buttons'>
                        <Button 
                            variant='contained'
                            className='resume-button'
                            style={{
                                backgroundColor:'#1088a0',
                                color:'white',
                                fontSize:'20px',
                            }}
                            href = {Resume}
                            target = '_blank'
                        >View Resume</Button>
                        <Button 
                            variant='contained' 
                            style={{
                                backgroundColor:'#1088a0',
                                color: 'white',
                                fontSize: '20px'
                            }}
                            className='info-button'
                        >
                            <Link
                            to='Contact'
                            smooth={true}
                            >
                                Contact
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className='homepage-photo'>
                    <img className='profile' alt='' src={ProfilePicture}/>
                </div>
            </div>
        </div>
    )
}

export default Homepage;