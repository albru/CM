import React from 'react';
import classes from './Email.css';
import media from '../../../shared/css/Media.css';
import EmailImg from '@material-ui/icons/Email';

const email = props => {
    return (
        <div className={[classes.Email, media[props.mediaType]].join(' ')}>
            <EmailImg />
            <a href="/3212">info@cetus-media.ru</a>
        </div>
    )
};

export default email;