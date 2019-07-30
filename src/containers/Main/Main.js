import React from 'react';
import classes from './Main.css';

const main = props => {
    return (
        <main className={classes.Main}>
            {props.children}
        </main>
    )
}

export default main;