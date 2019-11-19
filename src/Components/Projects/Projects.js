import React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';
import Project from './Project.js';
import './Projects.css';

const Projects = () => {
    return(
        <div className='Projects'>
             <div style={{display: 'flex', height: '100px'}}>
                <CreateIcon 
                        style={{
                            color: '#0889a3', 
                            fontSize: '60px', 
                            marginTop: '22px',
                            marginRight: '12px'
                    }}/>
                <div className='experience-title'>
                    <p>Projects</p>
                </div>
            </div>
            <div style={{display: 'flex'}}>
                <div className='project1-info'>
                    <p style={{fontSize: '26px', fontWeight: 'bold', marginBottom: '-10px'}}>eyeSight</p>
                    <p style={{fontSize: '20px', opacity: '0.6'}}>Mobile App</p>
                    <ul style={{fontSize: '18px'}}>
                        <li>App detects the most dominant colors in an image and provides information about other colors</li>
                        <li>Helps individuals that have difficulties identifying colors</li>
                        <li>Created front-end of the app using React Native with Expo's camera module</li>
                        <li>Created back-end algorithm using Flask and python with OpenCV and NumPy</li>
                    </ul>
                    <div style={{textAlign: 'right', paddingRight: '5px', paddingBottom: '15px', marginTop: '20px'}}>
                        <Button href="https://github.com/eshaanc20/eyeSight" target='_blank' variant="contained" style={{color: 'white', backgroundColor: '#0889a3', marginLeft: '12px', fontSize: '14px'}}>
                            Github
                        </Button>
                    </div>
                </div>
              
            </div>
            <div className='project2-info'>
                <p style={{fontSize: '26px', fontWeight: 'bold', marginBottom: '-10px'}}>Devkit</p>
                <p style={{fontSize: '20px', opacity: '0.6'}}>Web Application</p>
                <ul style={{fontSize: '18px'}}>
                    <li>Web application that helps find an optimal software tool such as APIs for a project based on requirements</li>
                    <li>Used React with material-UI for front-end with axios for making asynchronous requests to the backend</li>
                    <li>Created back-end using express.js and set up multiple get and post requests</li>
                    <li>Deployed the app to firebase and the back-end to Heroku</li>
                </ul>
                <div style={{textAlign: 'right', paddingRight: '5px', paddingBottom: '20px'}}>
                    <Button href="https://devkit-ce752.firebaseapp.com" variant="contained" target='_blank' style={{backgroundColor: '#0972b8', color: 'white', fontSize: '14px'}}> 
                        Project
                    </Button>
                    <Button href="https://github.com/eshaanc20/DevKit" variant="contained" target='_blank' style={{color: 'white', backgroundColor: '#0889a3', marginLeft: '12px', fontSize: '14px'}}>
                        Github
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Projects;