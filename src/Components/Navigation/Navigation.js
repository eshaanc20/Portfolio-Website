import React from 'react';
import './Navigation.css';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-scroll';

const Navigation = () => {
    return(
        <AppBar style={{backgroundColor: '#16549c'}}>
            <div className='Navigation'>
                <p style={{fontSize: '20px', marginLeft: '20px'}}>Eshaan</p>
                <div className='Navigation-options'>
                    <p className="navigation-option">
                        <Link
                            to='Education'
                            smooth={true}
                        >
                            Education
                        </Link>
                    </p>
                    <p className="navigation-option">
                        <Link
                            to='Experiences'
                            smooth={true}
                        >
                            Experience
                        </Link>
                    </p>
                    <p className="navigation-option">
                        <Link
                            to='Skills'
                            smooth={true}
                        >
                            Skills
                        </Link>
                    </p>
                    <p className="navigation-option">
                        <Link
                            to='Projects'
                            smooth={true}
                        >
                            Projects
                        </Link>
                    </p>
                    <p className="navigation-option">
                        <Link
                            to='Certifications'
                            smooth={true}
                        >
                            Certifications
                        </Link>
                    </p>
                    <p className="navigation-option">
                        <Link
                            to='Contact'
                            smooth={true}
                        >
                            Contact
                        </Link>
                    </p>
                </div>
            </div>
        </AppBar>
    )
}

export default Navigation;