import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Logo.css';
import PropTypes from 'prop-types';

const Logo = props => {
    let logoText = props.header ? 'CetusMedia' : 'CM';
    return (
        <div className={[classes.Logo, classes[props.logoType]].join(' ')}>
            <Link to="/">{logoText}</Link>
        </div>
    )
};

Logo.propTypes = {
    header: PropTypes.bool,
    logoType: PropTypes.string
}

export default Logo;