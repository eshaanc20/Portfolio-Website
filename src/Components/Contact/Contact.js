import React from 'react';
import './Contact.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Contact extends React.Component {
    render() {
        return(
            <div className='contactContainer'>
                <div className='contactInfo'>
                    <p id='email'>eshaanchaudhari@hotmail.com</p>
                    <p>647-639-7482</p>
                </div>
                <div className='contactCard'>

                </div>
            </div>
        );
    };
}

export default Contact;