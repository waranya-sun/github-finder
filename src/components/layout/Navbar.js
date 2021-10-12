import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <a href="/"><h1 className="title"><FontAwesomeIcon icon={faGithubAlt} className="githubIcon" />GitHub Finder</h1></a>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>     
            </nav>
        </>
    )
}

export default Navbar;