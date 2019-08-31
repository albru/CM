import React from 'react';
import classes from './Spinner.css';

const spinner = props => {
    return (
        <div className={classes.Loader}>Загрузка...</div>
    )
}

export default spinner;