import React from 'react';

import classes from './Contacts.css';
import inst from '../../assets/instagram.svg';
import whats from '../../assets/whatsapp.svg';
import vk from '../../assets/vk.svg';

const contacts = props => {
    return (
        <div className={classes.Contacts}>
            <div>
                <span>+7 (921) 555 55 55</span>
            </div>
            <div>
                <img src={inst} alt='inst'></img>
                <img src={vk} alt='vk'></img>
                <img src={whats} alt='whatsapp'></img>
            </div>
        </div>
        
    )
};

export default contacts;