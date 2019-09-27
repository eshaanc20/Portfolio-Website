import React from 'react';
import './Card1.css';

const card = (props) => {
    return(
        <div className='cards-1'>
            <p>{props.text}</p>
        </div>
    );
}

export default card;