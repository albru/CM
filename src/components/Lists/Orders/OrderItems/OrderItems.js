import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions/index';
import Spinner from '../../../UI/Spinner/Spinner';
import OrderItem from './OrderItem/OrderItem';

const OrderItems = props => {
    const { 
        loadOrders, 
        loadedOrders, 
        extra 
    } = props;

    useEffect(() => {
        loadOrders();
    },[loadOrders])

    let orderList = [];
    let orders = <Spinner />

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
        />
        )
    }

    return (
        <ul>
            {orders}
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        loadedOrders: state.orders.data,
        extra: state.orders.fetchResult.extra
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadOrders: () => dispatch(actions.fetchOrders())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(OrderItems);