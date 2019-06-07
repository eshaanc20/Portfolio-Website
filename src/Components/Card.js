import React from 'react';

const viewCard = (props) => {
    const style = {
        border: '1px solid lightgray',
        boxShadow: '0px 2px 2px #cccccc',
        padding: '11px',
        width: 'auto',
        height: 'auto',
        textAlign: 'center'
    }

    return (
        <div style = {style}>
            <p>{props.text}</p>
        </div>
    );
}

export default viewCard;