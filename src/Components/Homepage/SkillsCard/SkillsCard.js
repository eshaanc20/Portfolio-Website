import React from 'react';
import Card from '../../Card.js';
import './SkillsCard.css';

const skills = () => {
    return(
        <div className = 'skills'>
            <h4>Skills</h4>
            <div style={{display:'flex',flexWrap:'wrap', marginTop: '4px'}}>
                <Card text='Python'/>
                <Card text='Deep neural networks'/>
                <Card text='NumPy'/>
                <Card text='openCV'/>
                <Card text='Javascript'/>
                <Card text='HTML'/>
                <Card text='CSS'/>
                <Card text='ReactJS'/>
                <Card text='NodeJS'/>
                <Card text='Axios'/>
                <Card text='Web development'/>
                <Card text='C#'/>
                <Card text='Front-end development'/>
                <Card text='Autodesk Inventor'/>
            </div>
        </div>
    );
}

export default skills;