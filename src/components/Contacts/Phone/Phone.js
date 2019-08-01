import React from 'react';
import classes from './Phone.css';
import media from '../../../shared/css/Media.css';

const phone = props => {
    let attachedClasses = [classes.Phone, media.DesktopOnly]
    return (
        <div className={attachedClasses.join(' ')}>
            <a href="#">+7 (921) 929 99 99 </a>
        </div>
    )
};

export default phone;