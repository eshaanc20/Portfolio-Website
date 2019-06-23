import React from 'react';
import './Skills.css';
import TextField from '@material-ui/core/TextField';
import Card from '../Education/Card.js';

const skillsList = [
    'JavaScript', 'Python', 'Deep Neural Networks', 'Numpy',
    'HTML', 'CSS', 'React', 'NodeJS',
    'openCV', 'C#', 'Git', 'Autodesk inventor',
    'Web development', 'Front-end development', 'Machine Learning',
    'Back-end development', 'Communication', 'Multitasking', 'Teamwork',
    'Fast learner', 'Adaptable'
]

const cardComponent = skillsList.map(skill => {
    return(
        <Card text={skill}/>
    );
})

const skills = () => {
    return(
        <div className='skillspage'>
            <div className='skillsName'>
                <p className='skillsTitle'>Skills</p>
                <TextField className='search' label='Search' margin='normal'/>
            </div>
            <div className='skills'>
                {cardComponent}
            </div>
        </div>
    );
}

export default skills;