import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Card1 from './Card1.js';
import './Projects.css'

const projects = () => {
    return(
        <div className="projects">
          <div style={{margin:'auto', marginTop:'25px', maxWidth: '1000px'}}>
            <h2 className="projects-title">Projects</h2>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '50px'}}>
              <Card style={{width: '90%', maxWidth: '400px', paddingRight: '20px', paddingLeft: '20px', marginTop: '25px', marginRight: '50px'}}>
                <CardContent>
                  <p style={{textAlign: 'center', fontSize: '25px'}}>
                    Devkit
                  </p>
                  <p style={{fontSize: '16px', opacity: '0.8', textAlign: 'center', marginTop: '-15px'}}>Web Application</p>
                  <p style={{fontSize: '16px'}}>Details</p>
                  <ul style={{fontSize: '14px'}}>
                    <li>Web application that helps find an optimal software tool such as APIs for a project based on requirements</li>
                    <li>Used React with material-UI for front-end with axios for making asynchronous requests to the backend</li>
                    <li>Created back-end using express.js and set up multiple get and post requests</li>
                    <li>Deployed the app to firebase and the backend to Heroku</li>
                  </ul>
                  <p style={{fontSize: '16px'}}>Programming tools</p>
                  <div style={{display:'flex', flexWrap: 'wrap', marginTop: '-20px'}}>
                    <Card1 text='React'/>
                    <Card1 text='Node.js'/>
                    <Card1 text='Express.js'/>
                    <Card1 text='HTML'/>
                    <Card1 text='JavaScript'/>
                    <Card1 text='CSS'/>
                    <Card1 text='Material-UI'/>
                  </div>
                </CardContent>
                <div style={{textAlign: 'right', paddingRight: '5px', paddingBottom: '20px'}}>
                  <Button href="https://devkit-ce752.firebaseapp.com" variant="contained" style={{backgroundColor: '#005ce6', color: 'white', fontSize: '14px'}}> 
                    Project
                  </Button>
                  <Button href="https://github.com/eshaanc20/DevKit" variant="contained" style={{color: 'white', backgroundColor: 'green', marginLeft: '12px', fontSize: '14px'}}>
                    Github
                  </Button>
                </div>
              </Card>
              <Card style={{width: '90%', maxWidth: '400px', paddingRight: '20px', paddingLeft: '20px', marginTop: '25px'}}>
                <CardContent>
                  <p style={{textAlign: 'center', fontSize: '25px'}}>
                    Announce
                  </p>
                  <p style={{fontSize: '16px', opacity: '0.8', textAlign: 'center', marginTop: '-15px'}}>Web Application</p>
                  <p style={{fontSize: '16px'}}>Details</p>
                  <ul style={{fontSize: '14px'}}>
                    <li>Account based web application allows for clubs to communicate with their members through announcements</li>
                    <li>Multiple HTML, JavaScript, CSS files</li>
                    <li>Heavy focus on JSON, string indexing, UI design and using local storage</li>
                    <li>Learned web developement</li>
                    <li>Developed skills such as problem solving and analytical</li>
                  </ul>
                  <p style={{fontSize: '16px'}}>Programming tools</p>
                  <div style={{display:'flex', flexWrap: 'wrap', marginTop: '-20px'}}>
                    <Card1 text='HTML'/>
                    <Card1 text='JavaScript'/>
                    <Card1 text='CSS'/>
                  </div>
                </CardContent>
                <div style={{textAlign: 'right', paddingRight: '5px', paddingBottom: '15px', marginTop: '50px'}}>
                  <Button href="https://github.com/eshaanc20/Announce" variant="contained" style={{color: 'white', backgroundColor: 'green', marginLeft: '12px', fontSize: '14px'}}>
                    Github
                  </Button>
                </div>
              </Card>
              <Card style={{width: '90%', maxWidth: '400px', paddingRight: '20px', paddingLeft: '20px', marginTop: '25px', height: '405px', marginRight: '50px'}}>
                <CardContent>
                  <p style={{textAlign: 'center', fontSize: '25px'}}>
                    eyeSight
                  </p>
                  <p style={{fontSize: '16px', opacity: '0.8', textAlign: 'center', marginTop: '-15px'}}>Algorithm</p>
                  <p style={{fontSize: '16px'}}>Details</p>
                  <ul style={{fontSize: '14px'}}>
                    <li>Created an algorithm to detect the color of an object given an image</li>
                    <li>Uses python with OpenCV and NumPy</li>
                    <li>App intended to help individuals with color blindness</li>
                    <li>Currently working on front-end with react native</li>
                  </ul>
                  <p style={{fontSize: '16px'}}>Programming tools</p>
                  <div style={{display:'flex', flexWrap: 'wrap', marginTop: '-20px'}}>
                    <Card1 text='Python'/>
                    <Card1 text='OpenCV'/>
                    <Card1 text='NumPy'/>
                    <Card1 text='React Native'/>
                  </div>
                </CardContent>
                <div style={{textAlign: 'right', paddingRight: '5px', paddingBottom: '15px', marginTop: '20px'}}>
                  <Button href="https://github.com/eshaanc20/eyeSight" variant="contained" style={{color: 'white', backgroundColor: 'green', marginLeft: '12px', fontSize: '14px'}}>
                    Github
                  </Button>
                </div>
              </Card>
              <Card style={{width: '90%', maxWidth: '400px', paddingRight: '20px', paddingLeft: '20px', marginTop: '25px', height: '405px'}}>
                <CardContent>
                  <p style={{textAlign: 'center', fontSize: '25px'}}>
                    Fit Together
                  </p>
                  <p style={{fontSize: '16px', opacity: '0.8', textAlign: 'center', marginTop: '-15px'}}>App</p>
                  <p style={{fontSize: '16px'}}>Details</p>
                  <ul style={{fontSize: '14px'}}>
                    <li>Cross platform app promotes excerise by helping users post/view events in community to get involved in</li>
                    <li>Through teamwork, demoed the app at DeltaHacks as a prototype and won best use of Google platform challenge</li>
                    <li>I worked on the UI design for the app using dart with flutter</li>
                  </ul>
                  <p style={{fontSize: '16px'}}>Programming tools</p>
                  <div style={{display:'flex', flexWrap: 'wrap', marginTop: '-20px'}}>
                    <Card1 text='Dart'/>
                    <Card1 text='Flutter'/>
                  </div>
                </CardContent>
                <div style={{textAlign: 'right', paddingRight: '5px', paddingBottom: '15px', marginTop: '-14px'}}>
                  <Button href="https://github.com/eshaanc20/Fit-Together" variant="contained" style={{color: 'white', backgroundColor: 'green', marginLeft: '12px', fontSize: '14px'}}>
                    Github
                  </Button>
                </div>
              </Card>
              <Card style={{width: '90%', maxWidth: '400px', paddingRight: '20px', paddingLeft: '20px', height: '405px', marginTop: '25px'}}>
                <CardContent>
                  <p style={{textAlign: 'center', fontSize: '25px'}}>
                    Finger Prosthetic
                  </p>
                  <p style={{fontSize: '16px', opacity: '0.8', textAlign: 'center', marginTop: '-15px'}}>CAD Project</p>
                  <p style={{fontSize: '16px'}}>Details</p>
                  <ul style={{fontSize: '14px'}}>
                    <li>Designed a finger prosthetic using Autodesk Inventor and 3D printed it to verify the functionality</li>
                    <li>Designed a gear train with an error of less than 1% given a specific input speed and output speed</li>
                    <li>Group project for an enginnering design class</li>
                    <li>Learned the basics of CAD</li>
                  </ul>
                  <p style={{fontSize: '16px'}}>Tools</p>
                  <div style={{display:'flex', flexWrap: 'wrap', marginTop: '-20px'}}>
                    <Card1 text='Autodesk Inventor'/>
                    <Card1 text='CAD'/>
                  </div>
                </CardContent>
                <div style={{textAlign: 'right', paddingRight: '5px', paddingBottom: '15px'}}>
                  <Button href="https://drive.google.com/drive/folders/1lgBk3KKjjh3j3Jx8eqvFbL17ERNeqIN1?usp=sharing" variant="contained" style={{backgroundColor: '#005ce6', color: 'white', fontSize: '14px'}}> 
                    Project
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
    );
}

export default projects;