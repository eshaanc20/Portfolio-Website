import React from 'react';
import Card from '../../Card.js';
import './SkillsCard.css';

const skills = () => {
    return(
        <div className = 'skills'>
            <h4>Skills</h4>
            <div style={{display:'flex',flexWrap:'wrap'}}>
                <Card text='Python'/>
                <Card text='Deep neural networks'/>
                <Card text='NumPy'/>
                <Card text='Javascript'/>
                <Card text='HTML'/>
                <Card text='CSS'/>
                <Card text='ReactJS'/>
                <Card text='NodeJS'/>
                <Card text='Axios'/>
                <Card text='Web development'/>
                <Card text='Front-end development'/>
                <Card text='Autodesk Inventor'/>
                <Card text='C#'/>
            </div>
        </div>
    );
}

export default skills;