import React from 'react';
import classes from './AdvConstructor.css';
import Button from '../../components/UI/Button/Button';

const AdvConstructor = props => {
    const buttonRedirectHandler = () => {
        props.history.push('/');
    }
    return (
        <div className={classes.AdvConstructor}>
            <h2> Конструктор вывесок временно недоступен.  </h2>
            <Button 
                btnType='MainButton'
                clicked={buttonRedirectHandler}> На главную </Button> 
        </div>
        
    )
};

export default AdvConstructor;