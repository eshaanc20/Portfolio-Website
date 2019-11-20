import React from 'react';
import './Skills.css';
import BuildIcon from '@material-ui/icons/Build';

const Skills = () => {
    var skills = [
        'JavaScript', 'Python', 'C', 'HTML', 'CSS', 'C#', 'MATLAB', 'Verilog', 'Bash',
        'ReactJS', 'Node.js', 'Express.js', 'Keras', 'React Native', 'Flask', 'Material-UI', 'OpenCV', 'NumPy', 'TensorFlow', 'Axios',
        'Git', 'Github', 'APIs', 'Heroku', 'Firebase', 'npm', 'Visual Studio Code', 'I2C', 'HC-12',
        'Web development', 'Front-end developement', 'Back-end development', 'Neural Networks', 'Algorithms', 'Problem Solving',
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
            <div className='skills1'>
                <div className='languages'>
                    <p style={{
                        fontSize: '25px', 
                        marginTop:'0px', 
                        backgroundColor: '#16549c', 
                        color:'white',
                        borderTopRightRadius: '15px',
                        borderTopLeftRadius: '15px',
                        padding: '10px',
                        textAlign: 'center',
                    }}
                    >Languages</p>
                    <div style={{display: 'flex', flexWrap: 'wrap', paddingRight: '28px', paddingLeft: '28px'}}>
                        {skills.map((skill, index) => {
                            if (index < 9) {
                                return(
                                    <div className='skill'>
                                        {skill}
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
                <div className='libraries-frameworks'>
                    <p style={{
                        fontSize: '25px', 
                        marginTop:'0px', 
                        backgroundColor: '#16549c', 
                        color:'white',
                        borderTopRightRadius: '15px',
                        borderTopLeftRadius: '15px',
                        padding: '10px',
                        textAlign: 'center',
                    }}
                    >Libraries and Frameworks</p>
                        <div style={{display: 'flex', flexWrap: 'wrap', paddingRight: '28px', paddingLeft: '28px'}}>
                            {skills.map((skill, index) => {
                                if (index < 20 && index > 8) {
                                    return(
                                        <div className='skill'>
                                            {skill}
                                        </div>
                                    )
                                }
                            })}
                        </div>
                </div>
                <div className='tools'>
                    <p style={{
                        fontSize: '25px', 
                        marginTop:'0px', 
                        backgroundColor: '#16549c', 
                        color:'white',
                        borderTopRightRadius: '15px',
                        borderTopLeftRadius: '15px',
                        padding: '10px',
                        textAlign: 'center',
                    }}
                    >Software Tools</p>
                    <div style={{display: 'flex', flexWrap: 'wrap', paddingRight: '28px', paddingLeft: '28px'}}>
                        {skills.map((skill, index) => {
                            if (index > 19 && index < 29) {
                                return(
                                    <div className='skill'>
                                        {skill}
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
                <div className='tools'>
                    <p style={{
                        fontSize: '25px', 
                        marginTop:'0px', 
                        backgroundColor: '#16549c', 
                        color:'white',
                        borderTopRightRadius: '15px',
                        borderTopLeftRadius: '15px',
                        padding: '10px',
                        textAlign: 'center',
                    }}
                    >Skills</p>
                    <div style={{display: 'flex', flexWrap: 'wrap', paddingRight: '28px', paddingLeft: '28px'}}>
                        {skills.map((skill, index) => {
                            if (index > 28) {
                                return(
                                    <div className='skill'>
                                        {skill}
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;