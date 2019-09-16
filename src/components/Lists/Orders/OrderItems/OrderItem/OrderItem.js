import React from 'react';
import { PropTypes } from 'prop-types';

const OrderItem = props => {
    return (
        <li>
            <h3>Заказ на размещение в {props.place}</h3>
            <h3>Диагональ панели: {props.size}</h3>
            <h3>Длительность рекламы: {props.time}</h3>
            <h3>Комментарий:</h3>
            <p>{props.comment}</p>
        </li>
    )
}

OrderItem.propTypes = {
    place:   PropTypes.string,
    size:    PropTypes.string,
    time:    PropTypes.number,
    comment: PropTypes.string
}

export default OrderItem;