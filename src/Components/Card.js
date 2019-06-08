import React from 'react';

const viewCard = (props) => {
    const style = {
        border: '1px solid lightgray',
        boxShadow: '0px 2px 2px #cccccc',
        width: props.width,
        height: 'auto',
        textAlign: 'center',
        marginTop: '20px',
        padding: '10px',
        marginRight: '10px',
        display: props.display
    }

    return (
        <p style={style}>{props.text}</p>
    );
}

export default viewCard;