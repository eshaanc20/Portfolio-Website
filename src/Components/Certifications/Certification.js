import React from 'react';
import Button from '@material-ui/core/Button';
import './Certifications.css';
import Course1 from '../../Assets/Course1.png';
import Course2 from '../../Assets/Course2.png';
import Course3 from '../../Assets/Course3.png';

const Certifications = (props) => {
    var course = "Course";
    if (props.course === 'Course1') {
        course = Course1;
    } else if (props.course === 'Course2') {
        course = Course2;
    } else if (props.course === 'Course3') {
        course = Course3;
    }
    return(
        <div className='Certification'>
            <div className='Certificate'>
                <img src={course} height='200px' width='300px' alt=''/>
            </div>
            <p style={{fontWeight: 'bold', fontSize: '20px'}}>Name</p>
            <p style={{fontSize: '18px'}}>{props.name}</p>
            <p style={{fontWeight: 'bold', fontSize: '20px'}}>Issued Organization</p>
            <p style={{fontSize: '18px'}}>{props.Issued_Organization}</p>
            <p style={{fontWeight: 'bold', fontSize: '20px'}}>Date</p>
            <p style={{fontSize: '18px'}}>{props.date}</p>
            <div style={{textAlign: 'center'}}>
                <Button href={props.certificate} variant='contained' style={{backgroundColor: '#0889a3', color: 'white'}}>
                    View Certification
                </Button>
            </div>
        </div>
    )
}

export default Certifications;