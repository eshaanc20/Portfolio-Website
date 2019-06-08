import React from 'react';
import '../Assets/InfoCard.css';
import Card from './Card.js';

const generalInfo = () => {
    return (
        <div className = 'card'>
            <div className = 'educationSummary'>
                <h4>Education</h4>
                <p className = 'style1'>Software Engineering and Management</p>
                <p>McMaster University</p>
                <p>2018-2023</p>
            </div>
            <div className = 'style1'>
                <h4>Status</h4>
                <p>Seeking internships/co-op</p>
            </div>
            <div>
                <h4>Interests</h4>
                <Card text='Machine Learning' width='128px' display='inline-block'/>
                <Card text='Software security' width='120px' display='inline-block'/>
                <Card text='Full stack development' width='160px'/>
                <Card text='Data science' width='100px' display='inline-block'/>
                <Card text='Web development' width='124px' display='inline-block'/>
            </div>
        </div>
    );
}

export default generalInfo
