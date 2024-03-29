import React from 'react';
import './Skills.css';
import BuildIcon from '@material-ui/icons/Build';

const Skills = () => {
    var skills = [
        'JavaScript', 'Python', 'C', 'Java', 'HTML', 'CSS', 'TypeScript', 'C#', 'MATLAB', 'Verilog',
        'React', 'Node', 'Express.js', 'Angular', 'Keras', 'React Native', 'Flask', 'Material-UI', 'OpenCV', 'NumPy', 'TensorFlow', 'Axios',
        'MongoDB', 'JUnit', 'Pytest', 'Mongoose.js', 'Git', 'Github', 'Web REST APIs', 'npm', 'Visual Studio Code', 'I2C', 'HC-12',
        'Web development', 'Data Structures', 'Front-end development', 'Back-end development', 'Algorithms', 'Object-Oriented Programming',
    ]
    return(
        <div className="Skills" name='Skills' style={{paddingTop: '60px'}}>
            <div style={{display: 'flex', height: '120px'}}>
                <BuildIcon 
                    style={{
                        color: '#0889a3', 
                        fontSize: '50px', 
                        marginTop: '30px',
                        marginRight: '14px'
                }}/>
                <p className='skills-title'>Skills</p>
            </div>
            <div className='skills1' data-aos="fade-up">
                <div className='languages'>
                    <p style={{
                        fontSize: '25px', 
                        marginTop:'0px', 
                        backgroundColor: '#0977c0', 
                        color:'white',
                        borderTopRightRadius: '15px',
                        borderTopLeftRadius: '15px',
                        padding: '10px',
                        textAlign: 'center',
                    }}
                    >Languages</p>
                    <div style={{display: 'flex', flexWrap: 'wrap', paddingRight: '28px', paddingLeft: '28px'}}>
                        {skills.map((skill, index) => {
                            if (index < 10) {
                                return(
                                    <div className='skill'>
                                        {skill}
                                    </div>
                                )
                            } else {
                                return null;
                            }
                        })}
                    </div>
                </div>
                <div className='libraries-frameworks'>
                    <p style={{
                        fontSize: '25px', 
                        marginTop:'0px', 
                        backgroundColor: '#0977c0', 
                        color:'white',
                        borderTopRightRadius: '15px',
                        borderTopLeftRadius: '15px',
                        padding: '10px',
                        textAlign: 'center',
                    }}
                    >Libraries and Frameworks</p>
                        <div style={{display: 'flex', flexWrap: 'wrap', paddingRight: '28px', paddingLeft: '28px'}}>
                            {skills.map((skill, index) => {
                                if (index < 22 && index > 9) {
                                    return(
                                        <div className='skill'>
                                            {skill}
                                        </div>
                                    )
                                } else {
                                    return null;
                                }
                            })}
                        </div>
                </div>
                <div className='tools' data-aos="fade-up">
                    <p style={{
                        fontSize: '25px', 
                        marginTop:'0px', 
                        backgroundColor: '#0977c0', 
                        color:'white',
                        borderTopRightRadius: '15px',
                        borderTopLeftRadius: '15px',
                        padding: '10px',
                        textAlign: 'center',
                    }}
                    >Software Tools</p>
                    <div style={{display: 'flex', flexWrap: 'wrap', paddingRight: '28px', paddingLeft: '28px'}}>
                        {skills.map((skill, index) => {
                            if (index > 21 && index < 33) {
                                return(
                                    <div className='skill'>
                                        {skill}
                                    </div>
                                )
                            } else {
                                return null;
                            }
                        })}
                    </div>
                </div>
                <div className='tools'>
                    <p style={{
                        fontSize: '25px', 
                        marginTop:'0px', 
                        backgroundColor: '#0977c0', 
                        color:'white',
                        borderTopRightRadius: '15px',
                        borderTopLeftRadius: '15px',
                        padding: '10px',
                        textAlign: 'center',
                    }}
                    >Skills</p>
                    <div style={{display: 'flex', flexWrap: 'wrap', paddingRight: '28px', paddingLeft: '28px'}}>
                        {skills.map((skill, index) => {
                            if (index > 32) {
                                return(
                                    <div className='skill'>
                                        {skill}
                                    </div>
                                )
                            } else {
                                return null;
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;