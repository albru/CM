import React from 'react';

import classes from './Socials.css';
import media from '../../../shared/css/media.css'
import inst from '../../../assets/img/socialIcons/instagram.svg';
import vk from '../../../assets/img/socialIcons/vk.svg';
import whats from '../../../assets/img/socialIcons/whatsapp.svg';

const contacts = props => {
    return (
        <div className={[classes.Socials, media[props.mediaType]].join(' ')}>
            <a href="/2323"><img src={inst} alt='inst'></img></a>
            <a href="/4134"><img src={vk} alt='vk'></img></a>
            <a href="/135131"><img src={whats} alt='whatsapp'></img></a>              
        </div>
        
    )
};

export default contacts;