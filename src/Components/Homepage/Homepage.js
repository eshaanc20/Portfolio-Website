import React from 'react';
import NameCard from '../NameCard/NameCard.js';
import InfoCard from './InfoCard/InfoCard.js';
import SkillsCard from './SkillsCard/SkillsCard.js';

const homepage = () => {
    const style = {
        display: 'flex',
        flexWrap: 'wrap', 
    }
    return(
        <div style = {style}>
            <NameCard/>
            <InfoCard/>
            <SkillsCard/>
        </div>
    );
}

export default homepage;