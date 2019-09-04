import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Logo.css';

const Logo = props => {
    let logoText = props.header ? 'CetusMedia' : 'CM';
    return (
        <div className={[classes.Logo, classes[props.logoType]].join(' ')}>
            <Link to="/">{logoText}</Link>
        </div>
    )
};

export default Logo;