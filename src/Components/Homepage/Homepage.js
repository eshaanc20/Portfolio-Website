import React from 'react';
import NameCard from '../NameCard/NameCard.js';
import InfoCard from './InfoCard/InfoCard.js';
import SkillsCard from './SkillsCard/SkillsCard.js';
import Contact from './Contact/Contact.js';

const homepage = () => {
    const style = {
        display: 'flex',
        flexWrap: 'wrap', 
        justifyContent: 'space-evenly',
        width: '92%',
        paddingBottom: '14px',
        paddingTop: '20px',
        marginLeft: '4vw',
    }
    return(
        <div>
            <NameCard/>
            <div style = {style}>
                <InfoCard/>
                <SkillsCard/>
                <Contact/>
            </div>
        </div>
    );
}

export default homepage;