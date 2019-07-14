import React from 'react';
import './Courses.css';
import Card from './Card.js';

const courses = () => {
    return(
        <div className='a'>
            <p className='p2'>Courses</p>
            <div className='courses'>
                <div className='a2'>
                    <p className='p1'>Second Year</p>
                    <div className='courses1'>
                        <Card text='Data Structures and Algorithms'/>
                        <Card text='Digital Systems and Interfacing'/>
                        <Card text='Principles of Programming'/>
                        <Card text='Computer Architecture'/>
                        <Card text='Discrete Mathematics with Applications I'/>
                        <Card text='Discrete Mathematics with Application II'/>
                        <Card text='Software Engineering Practice and Experience: Software Development Skills'/>
                        <Card text='Software Engineering Practice and Experience: Binding Theory to Practice'/>
                        <Card text='Software Design I - Introduction to Software Developement'/>
                        <Card text='Engineering Math III'/>
                        <Card text='Introduction to Marketing'/>
                    </div>
                </div>
                <div className='a2'>
                    <p className='p1'>First Year</p>
                    <div className='courses1'>
                        <Card text='Engineering Computation'/>
                        <Card text='Engineering Design and Graphics'/>
                        <Card text='Engineering Math I'/>
                        <Card text='Engineering Math II'/>
                        <Card text='Engineering Math III'/>
                        <Card text='Engineering Profession and Practice'/>
                        <Card text='Introductory Mechanics'/>
                        <Card text='Waves, Electrcity and Magnetic Fields'/>
                        <Card text='Microeconomics'/>
                        <Card text='Introduction to Psychology'/>
                        <Card text='General Chemistry for Engineering I'/>
                        <Card text='Structure and Properties of Materials'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default courses;