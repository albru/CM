import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import Spinner from '../../../UI/Spinner/Spinner';
import OrderItem from './OrderItem/OrderItem';
import ErrorMessage from '../../../UI/ErrorMessage/ErrorMessage';

import classes from './OrderItems.css';
import * as actions from '../../../../store/actions/index';

const OrderItems = props => {
    const { 
        fetchOrders,
        fetchClear,
        ordersIsLoad, 
        success,
        loading,
        token,
        userId,
        error
    } = props;

    useEffect(() => {
        fetchOrders(token, userId);
    },[fetchOrders, token, userId])

    let orderList = [];
    let orders;

    if (loading) {
        orders = <Spinner />
    }

    if (success) {
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

    if (error) {
        orders = <ErrorMessage errorMessage={error}
                               btnClick={fetchClear}
        />
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
        success: state.orders.fetchResult.success,
        error: state.orders.fetchResult.error,
        loading: state.orders.fetchResult.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId)),
        fetchClear: () => dispatch(actions.fetchOrdersClear())
    }
}

OrderItems.propTypes = {
    ordersIsLoad: PropTypes.object,
    fetchOrders:  PropTypes.object,
    extra:        PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderItems);