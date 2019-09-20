import React from 'react';
import { PropTypes } from 'prop-types';


import classes from './OrderItem.css';

const OrderItem = props => {
    return (
        <li className={classes.OrderItem}>
            <h5>Заказ на размещение в: <span>{props.place}</span></h5>
            <h5>Диагональ панели: <span>{props.size}</span></h5>
            <h5>Длительность рекламы: <span>{props.time}</span> минут</h5>
            <h5>Комментарий:<span>{props.comment}</span></h5>
            {props.icon}
        </li>
    )
}

OrderItem.propTypes = {
    place:   PropTypes.string,
    size:    PropTypes.string,
    time:    PropTypes.string,
    comment: PropTypes.string
}

export default OrderItem;