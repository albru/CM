import React from 'react';
import classes from './Email.css';
import media from '../../../shared/css/media.css';
import EmailImg from '@material-ui/icons/Email';
import PropTypes from 'prop-types';

const Email = props => {
    return (
        <div className={[classes.Email, media[props.mediaType]].join(' ')}>
            <EmailImg />
            <a href="/3212">info@cetus-media.ru</a>
        </div>
    )
};

Email.propTypes = {
    mediaType: PropTypes.string
}

export default Email;