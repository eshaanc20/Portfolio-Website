import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Contact.css';

const Contact = () => {
    const style = {
        marginTop: '20px',
    }

    return(
        <div className = 'flexBox'>
            <h4>Contact Me</h4>
            <TextField 
                label='Email' 
                style={style}/>
            <TextField 
                label='Message' 
                variant="outlined"
                multiline
                rows="5"
                style={style}/>
            <Button 
                variant='outlined' 
                color='primary' 
                style={style}>Send</Button>
        </div>
    );
}

export default Contact;