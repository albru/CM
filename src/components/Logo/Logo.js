import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Logo.css';

const logo = props => {
    let logoText = 'Please, enter logo name';
    if (props.header) {
        logoText = 'CetusMedia'
    };
    if (props.footer) {
        logoText = 'CM'
    };

    return (
        <div className={[classes.Logo, classes[props.logoType]].join(' ')}>
            <Link to="/">{logoText}</Link>
        </div>
    )
};

export default logo;