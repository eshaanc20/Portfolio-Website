import React from 'react';

const viewCard = (props) => {
    const style = {
        border: '1px solid lightgray',
        boxShadow: '0px 2px 2px #cccccc',
        width: 'auto',
        paddingBottom: '10px',
        textAlign: 'center',
        marginTop: '20px',
        padding: '10px',
        marginRight: '10px',
    }

    return (
        <p style={style}>{props.text}</p>
    );
}

export default viewCard;