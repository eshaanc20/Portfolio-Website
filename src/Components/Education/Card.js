import React from 'react';
import './Card.css';

const card = (props) => {
    return(
        <div className='cards'>
            <p>{props.text}</p>
        </div>
    );
}

export default card;