import React from 'react';
import classes from './Header.css';


const header = props => {
    console.log(classes)
    return (
        <header className={classes.Header}>
            <h1>headerComponent</h1>
        </header>
    )
}

export default header;