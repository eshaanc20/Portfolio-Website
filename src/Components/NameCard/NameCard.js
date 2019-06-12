import React from 'react';
import './NameCard.css';
import profilePicture from '../../Assets/profilePicture.jpg';

const Name = () => {
    return(
        <div className = 'nameCard'>
            <img className = "profilePicture" src = {profilePicture} alt = ""></img>
            <p className = "name">Eshaan Chaudhari</p> 
            <p className = 'statusTag'>Student</p>
        </div>
    );
}

export default Name;
