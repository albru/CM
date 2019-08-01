import React from 'react';
import classes from './Phone.css';
import media from '../../../shared/css/Media.css';

const phone = props => {
    return (
        <div className={media.DesktopOnly}>
            <a href="#">+7 (921) 929 99 99 </a>
        </div>
    )
};

export default phone;