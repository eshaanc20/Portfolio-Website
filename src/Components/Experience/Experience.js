import React from 'react';
import './Experience.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoIosBriefcase, IoIosSchool, IoLogoJavascript, IoLogoCss3 } from 'react-icons/io';
import { FaReact, FaHtml5, FaGitSquare } from "react-icons/fa";
import WorkIcon from '@material-ui/icons/Work';

const experience = () => {
    return(
        <div className='timeline'>
            <div style={{display: 'flex', height: '100px'}}>
                <WorkIcon 
                        style={{
                            color: '#0889a3', 
                            fontSize: '60px', 
                            marginTop: '24px',
                            marginRight: '12px'
                    }}/>
                <div className='experience-title'>
                    <p>Experience</p>
                </div>
            </div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    date='06/2019 - 08/2019'
                    iconStyle={{ background: 'white' }}
                    icon={<IoIosBriefcase/>}
                >
                    <h3 className='title'>Software Developer</h3>
                    <h4 className='subtitle'>Helping Hands</h4>
                    <p className='content'>
                        <ul style={{fontSize:'18px'}}>
                            <li>Front-end web development using ReactJS with Material-UI</li>
                            <li>Worked with multiple APIs such as Mapbox and Google Maps using axios</li>
                            <li>Developed skills with using git such as branches, pull requests and code reviews</li>
                            <li>Implemented an updated version of the web application from new design</li>
                            <li>Created an email filter using App Script</li>
                        </ul>
                    </p>
                    <div style={{fontSize: '42px', display: 'flex', width: '250px', justifyContent: 'space-evenly'}}>
                        <FaReact style={{color: '#2fc2f7'}}/>
                        <IoLogoJavascript style={{color: '#f0cf13'}}/>
                        <FaHtml5 style={{color: '#f54c0f'}}/>
                        <IoLogoCss3 style={{color: '#0f99f5'}}/>
                        <FaGitSquare/>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date='04/2019 - present'
                    iconStyle={{ background: 'white' }}
                    icon={<IoIosSchool/>}
                >
                    <h3 className='title'>Software Team - Communications</h3>
                    <h4 className='subtitle'>McMaster Hyperloop</h4>
                    <p className='content'>
                        <ul style={{fontSize:'18px'}}>
                            <li>Working with HC-12 module to set up long distance communication between ardunio nanos and offboard computer</li>
                            <li>Configuring I2C for onboard communication on hyperloop pod</li>
                            <li>Coordinated with various team members and subteams</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date='11/2016 - 08/2018'
                    iconStyle={{ background: 'white' }}
                    icon={<IoIosBriefcase/>}
                >
                    <h3 className='title'>Math Instructor</h3>
                    <h4 className='subtitle'>Kumon</h4>
                    <p className='content'>
                        <ul style={{fontSize:'18px'}}>
                            <li>Provided feedback to students through evaluation of high level math</li>
                            <li>Communicated to students of different skill levels to help understand math concepts</li>
                            <li>Developed skills such as multitasking and communication skills</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default experience;