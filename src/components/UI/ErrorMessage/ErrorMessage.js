import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

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

errorMessage.propTypes = {
    btnClick: PropTypes.func,
    errorMessage: PropTypes.string
}

export default errorMessage;