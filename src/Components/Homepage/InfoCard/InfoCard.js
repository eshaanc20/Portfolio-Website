import React from 'react';
import './InfoCard.css';
import Card from '../../Card.js';

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
            <h4>Interests</h4>
            <div style={{display:'flex',flexWrap:'wrap'}}>
                <Card text='Machine Learning'/>
                <Card text='Software security'/>
                <Card text='Full stack development'/>
                <Card text='Data science'/>
                <Card text='Web development'/>
                <Card text='Finance'/>
            </div>
        </div>
    );
}

export default generalInfo;
