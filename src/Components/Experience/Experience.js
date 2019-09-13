import React from 'react';
import './Experience.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {IoIosBriefcase, IoIosSchool} from 'react-icons/io'

const experience = () => {
    return(
        <div className='timeline'>
            <VerticalTimeline>
                <VerticalTimelineElement
                    date='06/2019 - 08/2019'
                    iconStyle={{ background: 'white' }}
                    icon={<IoIosBriefcase/>}
                >
                    <h3 className='title'>Software Developer</h3>
                    <h4 className='subtitle'>Helping Hands</h4>
                    <p className='content'>
                        <ul>
                            <li>Frontend web development using React with Material-UI</li>
                            <li>Worked with multiple APIs such as Mapbox and Google Maps using axios</li>
                            <li>Developed skills with using git such as branches, pull requests and code reviews</li>
                            <li>Implemented an updated version of the web application from new design</li>
                            <li>Created an email filter using App Script</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date='04/2019 - present'
                    iconStyle={{ background: 'white' }}
                    icon={<IoIosSchool/>}
                >
                    <h3 className='title'>Software Team - Communications</h3>
                    <h4 className='subtitle'>McMaster Hyperloop</h4>
                    <p className='content'>
                        <ul>
                            <li>Working with HC-12 module to set up long distance communication between ardunion nanos and offboard computer</li>
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
                        <ul>
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