import React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';
import Project from './Project.js';
import './Projects.css';

const Projects = () => {
    return(
        <div className='Projects' name='Projects' style={{paddingTop: '60px'}}>
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
            <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '10px'}}>
                <div className='project-info'>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '-40px'}}>
                        <p style={{fontSize: '26px', fontWeight: 'bold'}}>eyeSight</p>
                        <p style={{fontSize: '18px'}}>05/2019 – 11/2019</p>
                    </div>
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
                <div style={{display: 'flex', alignItems: 'center', margin: 'auto'}}>
                    <Project project='eyeSight' height='280px' width='160px'/>
                </div>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '60px'}}>
                <div className='project-info'>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '-40px'}}>
                        <p style={{fontSize: '26px', fontWeight: 'bold'}}>Devkit</p>
                        <p style={{fontSize: '18px'}}>08/2019 – 09/2019</p>
                    </div>
                    <p style={{fontSize: '20px', opacity: '0.6'}}>Web Application</p>
                    <ul style={{fontSize: '18px'}}>
                        <li>Web application that helps find an optimal software tool such as APIs for a project based on requirements</li>
                        <li>Used React with material-UI for front-end with axios for making asynchronous requests to the backend</li>
                        <li>Created back-end using express.js and set up multiple get and post requests</li>
                        <li>Deployed the app to firebase and the back-end to Heroku</li>
                    </ul>
                    <div style={{textAlign: 'right', paddingRight: '5px', paddingBottom: '20px', marginTop: '20px'}}>
                        <Button href="https://devkit-ce752.firebaseapp.com" variant="contained" target='_blank' style={{backgroundColor: '#0972b8', color: 'white', fontSize: '14px'}}> 
                            Project
                        </Button>
                        <Button href="https://github.com/eshaanc20/DevKit" variant="contained" target='_blank' style={{color: 'white', backgroundColor: '#0889a3', marginLeft: '12px', fontSize: '14px'}}>
                            Github
                        </Button>
                    </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', margin: 'auto'}}>
                    <Project project='Devkit' height='240px' width='400px'/>
                </div>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '60px'}}>
                <div className='project-info'>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '-40px'}}>
                        <p style={{fontSize: '26px', fontWeight: 'bold'}}>Finger Prosthetic</p>
                        <p style={{fontSize: '18px'}}>02/2019 – 04/2019</p>
                    </div>
                    <p style={{fontSize: '20px', opacity: '0.6'}}>Autodesk Inventor Project</p>
                    <ul style={{fontSize: '18px'}}>
                        <li>Designed a finger prosthetic using Autodesk Inventor and 3D printed it to verify the functionality</li>
                        <li>Created a gear train to achieve a given output speed from input speed with error less than 1%</li>
                        <li>Group project for an enginnering design class</li>
                        <li>Learned the basics of CAD</li>
                    </ul>
                    <div style={{textAlign: 'right', paddingRight: '5px', paddingBottom: '20px'}}>
                        <Button href="https://drive.google.com/drive/folders/1lgBk3KKjjh3j3Jx8eqvFbL17ERNeqIN1?usp=sharing" variant="contained" target='_blank' style={{color: 'white', backgroundColor: '#0972b8', marginLeft: '12px', fontSize: '14px'}}>
                            Project
                        </Button>
                    </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', margin: 'auto'}}>
                    <Project project='Inventor' height='240px' width='400px'/>
                </div>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '60px'}}>
                <div className='project-info'>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '-40px'}}>
                        <p style={{fontSize: '26px', fontWeight: 'bold'}}>Announce</p>
                        <p style={{fontSize: '18px'}}>02/2017 – 02/2019</p>
                    </div>
                    <p style={{fontSize: '20px', opacity: '0.6'}}>Web Application</p>
                    <ul style={{fontSize: '18px'}}>
                        <li>Account based web application allows for clubs to communicate with their members through announcements</li>
                        <li>Multiple HTML, JavaScript and CSS files</li>
                        <li>Heavy focus on JSON, string indexing, UI design and using local storage</li>
                        <li>First software project which helped me learn web development</li>
                        <li>Developed skills such as problem solving and analytical skills</li>
                    </ul>
                    <div style={{textAlign: 'right', paddingRight: '5px', paddingBottom: '20px', marginTop: '20px'}}>
                        <Button href="https://github.com/eshaanc20/Announce" variant="contained" target='_blank' style={{color: 'white', backgroundColor: '#0889a3', marginLeft: '12px', fontSize: '14px'}}>
                            Github
                        </Button>
                    </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', margin: 'auto'}}>
                    <Project project='Announce' height='240px' width='400px'/>
                </div>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '60px'}}>
                <div className='project-info'>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '-40px'}}>
                        <p style={{fontSize: '26px', fontWeight: 'bold'}}>Fit Together</p>
                        <p style={{fontSize: '18px'}}>01/2019 (DeltaHacks)</p>
                    </div>
                    <p style={{fontSize: '20px', opacity: '0.6'}}>Mobile App</p>
                    <ul style={{fontSize: '18px'}}>
                        <li>App promotes exercise by helping users post/view events in community to get involved in</li>
                        <li>Demoed the app at DeltaHacks as a prototype and won best use of Google Cloud Platform challenge</li>
                        <li>Worked on the UI design for the app using dart with Flutter</li>
                    </ul>
                    <div style={{textAlign: 'right', paddingRight: '5px', paddingBottom: '20px', marginTop: '20px'}}>
                        <Button href="https://devpost.com/eshaanc20" variant="contained" target='_blank' style={{color: 'white', backgroundColor: '#0972b8', marginLeft: '12px', fontSize: '14px'}}>
                            Devpost
                        </Button>
                        <Button href="https://github.com/eshaanc20/Fit-Together" variant="contained" target='_blank' style={{color: 'white', backgroundColor: '#0889a3', marginLeft: '12px', fontSize: '14px'}}>
                            Github
                        </Button>
                    </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', margin: 'auto'}}>
                    <Project project='FitTogether' height='280px' width='160px'/>
                </div>
            </div>
        </div>
    )
}

export default Projects;