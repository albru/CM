import React from 'react';
import Button from '../UI/Button/Button';

const errorMessage = props => {
    return (
        <div>
            <h3>Упс! Ошибка! Что-то пошло не так...</h3>
            <p>Ошибка: {props.errorMessage}</p>
            <Button btnType="MainButton"
                    clicked={props.btnClick}> 
                Ок
            </Button>
        </div>
    )
}

export default errorMessage;