import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import Spinner from '../../../UI/Spinner/Spinner';
import OrderItem from './OrderItem/OrderItem';

import classes from './OrderItems.css';
import * as actions from '../../../../store/actions/index';

const OrderItems = props => {
    const { 
        fetchOrders, 
        ordersIsLoad, 
        extra,
        loading,
        token,
        userId 
    } = props;

    useEffect(() => {
        fetchOrders(token, userId);
    },[fetchOrders, token, userId])

    let orderList = [];
    let orders;

    if (loading) {
        orders = <Spinner />
    }

    if (extra) {
        for (let key in ordersIsLoad) {
            orderList.push(ordersIsLoad[key])
        }
        orders = orderList.map(( item, index ) => 
        <OrderItem 
            key={index}
            size={item.size}
            place={item.place}
            comment={item.comment}
            time={item.showTime}
        />
        )
    }


    return (
        <ul className={classes.OrderItems}>
            {orders}
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        ordersIsLoad: state.orders.data,
        extra: state.orders.fetchResult.extra,
        loading: state.orders.fetchResult.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    }
}

OrderItems.propTypes = {
    ordersIsLoad: PropTypes.func,
    fetchOrders:  PropTypes.object,
    extra:        PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderItems);