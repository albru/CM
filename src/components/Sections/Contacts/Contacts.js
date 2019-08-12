import React from 'react';

import classes from './Contacts.css';

const contacts = props => {

    return (
        <section className={classes.Contacts}>
            <h1>Контакты</h1>
            {props.children}
        </section>
    )
};

export default contacts;
