import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions/index';
import Spinner from '../../../UI/Spinner/Spinner';
import OrderItem from './OrderItem/OrderItem';
import { PropTypes } from 'prop-types';
import classes from './OrderItems.css';

const OrderItems = props => {
    const { 
        loadOrders, 
        loadedOrders, 
        extra,
        loading 
    } = props;

    useEffect(() => {
        loadOrders(props.token);
    },[loadOrders, props.token])

    let orderList = [];
    let orders;

    if (loading) {
        orders = <Spinner />
    }

    if (extra) {
        for (let key in loadedOrders) {
            orderList.push(loadedOrders[key])
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
        loadedOrders: state.orders.data,
        extra: state.orders.fetchResult.extra,
        loading: state.orders.fetchResult.loading,
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadOrders: (token) => dispatch(actions.fetchOrders(token))
    }
}

OrderItems.propTypes = {
    loadOrders:   PropTypes.func,
    loadedOrders: PropTypes.object,
    extra:        PropTypes.bool
}



export default connect(mapStateToProps, mapDispatchToProps)(OrderItems);