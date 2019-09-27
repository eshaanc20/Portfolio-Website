import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Card1 from './Card1.js';
import './Projects.css'

const projects = () => {
    return(
        <div className="projects">
          <div style={{margin:'auto', width: '90%', maxWidth: '600px', marginTop:'50px'}}>
            <h2 className="projects-title">Projects</h2>
            <Card style={{width: '90%', maxWidth: '400px', paddingRight: '20px', paddingLeft: '20px'}}>
              <CardContent>
                <p style={{textAlign: 'center', fontSize: '25px'}}>
                  Devkit
                </p>
                <p style={{fontSize: '16px', opacity: '0.8', textAlign: 'center', marginTop: '-8px'}}>Web Application</p>
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
                  <Card1 text='Node'/>
                  <Card1 text='Express'/>
                  <Card1 text='HTML'/>
                  <Card1 text='JavaScript'/>
                  <Card1 text='CSS'/>
                </div>
              </CardContent>
              <div style={{textAlign: 'right', paddingRight: '10px', paddingBottom: '15px'}}>
                <Button href="https://devkit-ce752.firebaseapp.com" variant="contained" style={{backgroundColor: '#005ce6', color: 'white', fontSize: '14px'}}> 
                  Project
                </Button>
                <Button href="https://github.com/eshaanc20/DevKit" variant="contained" style={{color: 'white', backgroundColor: 'green', marginLeft: '12px', fontSize: '14px'}}>
                  Github
                </Button>
              </div>
            </Card>
          </div>
        </div>
    );
}

export default projects;