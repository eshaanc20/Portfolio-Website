import React from 'react';
import './Homepage.css';
import ProfilePicture from '../../Assets/profilePicture.jpg';

const homepage = () => {
    return(
        <div className = 'homepage'>
            <img className='profile' src={ProfilePicture}/>
            <p className='name'>Eshaan Chaudhari</p>
            <p>Software Engineering and Management Student</p>
            <p>McMaster University</p>
        </div>
    );
}

export default homepage;