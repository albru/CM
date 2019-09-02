import React from 'react';
import classes from './Phone.css';
import media from '../../../shared/css/Media.css';
import PhoneImg from '@material-ui/icons/Phone';

const phone = props => {
    return (
        <div className={[classes.Phone, media[props.mediaType]].join(' ')}>
            <PhoneImg />
            <a href="/3212">+7 (921) 929 99 99 </a>
        </div>
    )
};

export default phone;