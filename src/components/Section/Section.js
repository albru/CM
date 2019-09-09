import React from 'react';
import classes from './Section.css';
import PropTypes from 'prop-types';

const section = props => {
    return (
        <section className={classes[props.sectionType]}>
            {props.children}
        </section>
    )
}

section.propTypes = {
    sectionType: PropTypes.string
}

export default section;

