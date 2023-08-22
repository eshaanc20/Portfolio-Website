import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {IoMdCode, IoIosSchool, IoIosCalendar} from 'react-icons/io';
import SchoolIcon from '@material-ui/icons/School';
import './Education.css';

const Education = () => {
    var courses = [
        'Principles of programming', 
        'Data Structures and Algorithms',
        'Digital Systems and Interfacing', 
        'Computation',
        'Software Engineering Practice & Experience: Software Development'
    ]
    return(
        <div className='Education' name='Education' style={{paddingTop: '60px'}}>
            <div style={{display: 'flex', height: '125px'}}>
                <SchoolIcon 
                    style={{
                        color: '#0889a3', 
                        fontSize: '60px', 
                        marginTop: '25px',
                        marginRight: '14px'
                }}/>
                <p className='education-title'>Education</p>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}} data-aos="fade-up">
                <div style={{textAlign: 'center'}}>
                    <CircularProgressbar 
                        value={80} 
                        text={'Fifth year'} 
                        className='progress' 
                        styles={buildStyles({
                        textSize: '10px',
                        textColor: 'black',
                        pathColor: '#0977c0',
                    })}/>
                    <p style={{fontSize:'20px',marginTop:'0px'}}>Cumulative GPA: 3.5/4.0</p>
                </div>
                <div className='education-info'>
                    <IoMdCode className='icon'/>
                    <p className='p4'>Software Engineering and Management</p>
                    <IoIosSchool className='icon'/>
                    <p className='p4'>McMaster University</p>
                    <IoIosCalendar className='icon'/>
                    <p className='p4'>2018-2024</p>
                </div>
                <div className='classes'>
                    <p className='classes-title'>Relevant courses</p>
                    {courses.map(course => {
                        return(
                            <div className='course'>
                                <p>{course}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Education;