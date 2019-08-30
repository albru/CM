import React from 'react';
import classes from './Section.css'

const section = props => {
    return (
        <section className={classes[props.sectionType]}>
            {props.children}
        </section>
    )
}

export default section;