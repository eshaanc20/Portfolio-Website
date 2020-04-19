import React from 'react';
import './Homepage.css';
import ProfilePicture from '../../Assets/profilePicture.jpg';
import {IoLogoLinkedin, IoLogoGithub} from 'react-icons/io';
import Typing from 'react-typing-animation';
import Button from '@material-ui/core/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
import Resume from '../../Eshaan_Chaudhari_Resume.pdf';
import Particles from 'react-particles-js';

AOS.init();

const Homepage = () => {
    return(
        <div className = 'homepage'>
             <div className='particles'>
                <Particles
                    width='100vw'
                    height='100vh'
                    params={{
                        particles: {
                            number: {
                                value: 60
                            },
                            size: {
                                value: 2
                            }
                        }
                    }}
                />
            </div>
            <div style={{color: 'white'}}>
                <img className='profile' alt='' src={ProfilePicture}/>
                <Typing speed={150}>
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
                            backgroundColor:'#0972b8',
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
        </div>
    )
}

export default Homepage;