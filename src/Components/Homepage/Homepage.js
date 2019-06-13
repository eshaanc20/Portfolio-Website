import React from 'react';
import NameCard from '../NameCard/NameCard.js';
import InfoCard from './InfoCard/InfoCard.js';
import SkillsCard from './SkillsCard/SkillsCard.js';
import Contact from './Contact/Contact.js';
import Connect from './Connect/Connect.js';

const homepage = () => {
    const style = {
        display: 'flex',
        flexWrap: 'wrap', 
        justifyContent: 'space-evenly',
        width: '98%',
        paddingBottom: '14px',
        paddingTop: '20px',
        marginLeft: '16px',
    }
    return(
        <div>
            <NameCard/>
            <div style = {style}>
                <InfoCard/>
                <Contact/>
                <SkillsCard/>
                <Connect/>
            </div>
        </div>
    );
}

export default homepage;