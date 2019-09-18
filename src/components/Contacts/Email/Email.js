import React from 'react';
import PropTypes from 'prop-types';

import EmailImg from '@material-ui/icons/Email';

import media from '../../../shared/css/media.css';
import classes from './Email.css';

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