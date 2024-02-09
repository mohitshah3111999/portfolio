import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'; // Import the envelope icon


import PersonalInfo from '../PersonalInfo';
import About from '../About';
import Experience from '../Experience';
import Project from '../Project';
import { PROFILES, PROFILES_URL, RESUME_LINK, SUB_SECTION_HEADER, URL_REDIRECTION } from './portfolio.constants';
import './portfolio.css';

const Portfolio = () => {
    const [selectedSection, setSelectedSection] = useState(URL_REDIRECTION.ABOUT);

    const handleSectionClick = (section) => {
        setSelectedSection(section);
        window.history.replaceState(null, '', `#${section}`);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.ref');
            const scrollPosition = window.scrollY + 200;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    const id = section.getAttribute('id');
                    setSelectedSection(id);
                    window.history.replaceState(null, '', `#${id}`);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getListElement = (id) => (
        <li>
            <a className={`sectionHeaderStyle ${selectedSection === id ? 'selected' : ''}`} href={`#${id}`} onClick={() => handleSectionClick(id)}>
                {SUB_SECTION_HEADER[id]}
            </a>
        </li>
    );

    return (
        <div>
            <div className='flex space-between Mx Mt'>
                <div className='start'>
                    <div>
                        <PersonalInfo />
                        <ul>
                            {getListElement(URL_REDIRECTION.ABOUT)}
                            {getListElement(URL_REDIRECTION.EXPERIENCE)}
                            {getListElement(URL_REDIRECTION.PROJECTS)}
                        </ul>
                    </div>
                    <div className='flex iconsClass'>
                        <a href={PROFILES_URL[PROFILES.LINKEDIN]} target="_blank" rel="noopener noreferrer" className='socialIcon'>
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <a href={PROFILES_URL[PROFILES.INSTAGRAM]} target="_blank" rel="noopener noreferrer" className='socialIcon'>
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        <a href={`mailto:mohitshah3111999@gmail.com`} className='socialIcon'>
                            <FontAwesomeIcon icon={faEnvelope} size="2x" />
                        </a>
                        <a href={PROFILES_URL[PROFILES.TWITTER]} target="_blank" rel="noopener noreferrer" className='socialIcon'> 
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                    </div>
                </div>
                <div className='container'>
                    <div className='ref Mb20' id='about'>
                        <About />
                    </div>
                    <div className='Mb20 resume' id='about'>
                        <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer">
                            View Resume
                            <FontAwesomeIcon className='resumeIcon' icon={faExternalLinkAlt} />
                        </a>
                    </div>
                    <div className='ref Mb40' id='experience'>
                        <Experience />
                    </div>
                    <div className='ref Mb40' id='projects'>
                        <Project />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
