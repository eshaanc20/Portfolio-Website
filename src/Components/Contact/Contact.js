import React from 'react';
import './Contact.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import ContactMailIcon from '@material-ui/icons/ContactMail';

class Contact extends React.Component {
    render() {
        return(
            <div className='Contact'>
                <div style={{display: 'flex', height: '100px'}}>
                    <ContactMailIcon
                            style={{
                                color: '#0889a3', 
                                fontSize: '60px', 
                                marginTop: '22px',
                                marginRight: '12px'
                        }}/>
                    <div className='experience-title'>
                        <p>Contact</p>
                    </div>
                </div>
                <div className='contactContainer'>
                    <div className='contactInfo'>
                        <EmailIcon style={{marginTop:'15px', fontSize:'28px', marginRight:'5px'}}></EmailIcon>
                        <p id='email'>eshaanchaudhari@hotmail.com</p>
                        <PhoneIcon style={{marginTop:'14px', fontSize:'28px', marginRight:'5px'}}/>
                        <p>647-639-7482</p>
                    </div>
                    <div className='contactCard'>
                        <h2 id='contactTitle'>Contact</h2>
                        <form action="https://formspree.io/eshaanchaudhari@hotmail.com" method="POST">
                            <TextField
                                style={{width: '328px'}}
                                variant='outlined'
                                label='Name'
                                id='contactName'
                                name="Name"
                                type="text"
                            />
                            <TextField
                                style={{width: '328px', marginTop:'20px'}}
                                variant='outlined'
                                label='Email'
                                type="email"
                                name="_replyto"
                            />
                            <TextField
                                style={{width: '328px', marginTop:'20px'}}
                                variant='outlined'
                                label='Message'
                                name="Message"
                                multiline
                                rows= '8'
                            />
                            <Button
                                variant='contained'
                                style={{width: '328px', marginTop:'20px', backgroundColor: '#0889a3', color: 'white'}}
                                onClick={this.eventHandler}
                                type='submit'
                            >Send</Button>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
}

export default Contact;