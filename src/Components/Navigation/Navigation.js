import React from 'react';
import './Navigation.css';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-scroll';
import MenuIcon from '@material-ui/icons/Menu';

class Navigation extends React.Component {
    render() {
        return(
            <AppBar style={{backgroundColor: 'white', transition: "0.2s", width: '100%'}}>
                <div className='Navigation'>
                    <p style={{fontSize: '20px', marginLeft: '20px'}} class='nav-name'>Eshaan</p>
                    <div className='Navigation-options'>
                        <p className="navigation-option">
                            <Link
                                to='Education'
                                smooth={true}
                                style={{padding: '10px'}}
                            >
                                Education
                            </Link>
                        </p>
                        <p className="navigation-option">
                            <Link
                                to='Experiences'
                                smooth={true}
                                style={{padding: '10px'}}
                            >
                                Experience
                            </Link>
                        </p>
                        <p className="navigation-option">
                            <Link
                                to='Skills'
                                smooth={true}
                                style={{padding: '10px'}}
                            >
                                Skills
                            </Link>
                        </p>
                        <p className="navigation-option">
                            <Link
                                to='Projects'
                                smooth={true}
                                style={{padding: '10px'}}
                            >
                                Projects
                            </Link>
                        </p>
                        <p className="navigation-option">
                            <Link
                                to='Certifications'
                                smooth={true}
                                style={{padding: '10px'}}
                            >
                                Certifications
                            </Link>
                        </p>
                        <p className="navigation-option">
                            <Link
                                to='Contact'
                                smooth={true}
                                style={{padding: '10px'}}
                            >
                                Contact
                            </Link>
                        </p>
                    </div>
                </div>
            </AppBar>
        )
    }
}

export default Navigation;