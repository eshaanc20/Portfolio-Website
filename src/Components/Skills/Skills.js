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

let filterList = skillsList;

class Skills extends React.Component {
    state = {
        search: null
    }

    inputEvent = (event) => {
        filterList = skillsList.filter(skill => {
            return skill.indexOf(this.state.search) !== -1
        })
        this.setState({
            search: event.target.value
        })
    }

    render() {
        if (this.state.search === '') {
            filterList = skillsList;
        }

        const cardComponent = filterList.map(skill => {
            return(
                <Card text={skill}/>
            );
        })

        return(
            <div className='skillspage'>
                <div className='skillsName'>
                    <p className='skillsTitle'>Skills</p>
                    <TextField className='search' label='Search' onChange={this.inputEvent} margin='normal'/>
                </div>
                <div className='skills'>
                    {cardComponent}
                </div>
            </div>
        );
    }
}

export default Skills;