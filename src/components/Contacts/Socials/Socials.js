import React from 'react';

import classes from './Socials.css';
import inst from '../../../assets/instagram.svg';
import whats from '../../../assets/whatsapp.svg';
import vk from '../../../assets/vk.svg';

const contacts = props => {
    return (
        <div className={classes.Socials}>
            <div>
                <a href="#"><img src={inst} alt='inst'></img></a>
                <a href="#"><img src={vk} alt='vk'></img></a>
                <a href="#"><img src={whats} alt='whatsapp'></img></a>              
            </div>
        </div>
        
    )
};

export default contacts;