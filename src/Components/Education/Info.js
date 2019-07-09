import React from 'react';
import './Info.css';
import {IoMdCode, IoIosSchool, IoIosCalendar} from 'react-icons/io';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const education = () => {
    return(
        <div className='info'>
            <div>
                <CircularProgressbar value={40} text={'Second year'} className='progress' styles={buildStyles({
                    textSize: '10px',
                    textColor: 'black',
                    pathColor: 'darkgreen',
                })}/>
                <p style={{fontSize:'22px',marginTop:'0px'}}>Cumulative GPA: 3.7/4.0</p>
            </div>
            <div className='information'>
                <IoMdCode className='icon'/>
                <p className='p4'>Software Engineering and Management</p>
                <IoIosSchool className='icon'/>
                <p className='p4'>McMaster University</p>
                <IoIosCalendar className='icon'/>
                <p className='p4'>2018-2023</p>
            </div>
        </div>
    );
}

export default education;