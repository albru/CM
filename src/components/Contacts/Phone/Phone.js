import React from 'react';
import PropTypes from 'prop-types';

import PhoneImg from '@material-ui/icons/Phone';

import classes from './Phone.css';
import media from '../../../shared/css/media.css';


const Phone = props => {
    return (
        <div className={[classes.Phone, media[props.mediaType]].join(' ')}>
            <PhoneImg />
            <a href="/3212">+7 (921) 929 99 99 </a>
        </div>
    )
};

Phone.propTypes = {
    mediaType: PropTypes.string
}

export default Phone;