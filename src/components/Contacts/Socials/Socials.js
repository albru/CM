import React from 'react';

import classes from './Socials.css';
import media from '../../../shared/css/Media.css'
import inst from '../../../assets/instagram.svg';
import whats from '../../../assets/whatsapp.svg';
import vk from '../../../assets/vk.svg';

const contacts = props => {
    let attachedClasses = [media.DesktopOnly, classes.Socials]
    return (
        <div className={attachedClasses.join(' ')}>
            <a href="/2323"><img src={inst} alt='inst'></img></a>
            <a href="/4134"><img src={vk} alt='vk'></img></a>
            <a href="/135131"><img src={whats} alt='whatsapp'></img></a>              
        </div>
        
    )
};

export default contacts;