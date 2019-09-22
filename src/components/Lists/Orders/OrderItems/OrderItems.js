import React, { useEffect, useCallback, useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Spinner from '../../../UI/Spinner/Spinner';
import OrderItem from './OrderItem/OrderItem';
import ErrorMessage from '../../../UI/ErrorMessage/ErrorMessage';
import DeleteIcon from '@material-ui/icons/Delete';

import classes from './OrderItems.css';
import * as actions from '../../../../store/actions/index';
import { easyKey } from '../../../../shared/utility';

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
    
    const filteredObjAfterDelete = useCallback((obj, id) => {
        let res = Object.keys(obj) 
              .filter( key => key !== id ) 
              .reduce( (res, key) => Object.assign(res, { [key]: obj[key] }), {} ); 
        return res
    },[])

    let orderList = [];
    let orders;

    if (loading) {
        orders = <Spinner />
    }

    if (success) {
        let result;
        for (let key in ordersIsLoad) {
            result = {...ordersIsLoad[key], id: key}
            orderList.push(result)
        }
    }

    orders = useMemo(() => {
        return orderList.map(( item ) => 
            <OrderItem 
                key={easyKey()}
                size={item.size}
                place={item.place}
                comment={item.comment}
                time={item.showTime}
                icon={<DeleteIcon onClick={() => props.deleteOrder(item.id, token, filteredObjAfterDelete(ordersIsLoad, item.id))}/>}
            />
        )
    },[filteredObjAfterDelete, props, token, orderList, ordersIsLoad])

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
        fetchClear: () => dispatch(actions.fetchOrdersClear()),
        deleteOrder: (orderId, token, data) => dispatch(actions.deleteOrder(orderId, token, data))
    }
}

OrderItems.propTypes = {
    ordersIsLoad: PropTypes.object,
    fetchOrders:  PropTypes.func,
    fetchClear:   PropTypes.func,
    deleteOrder:  PropTypes.func,
    token:        PropTypes.string,
    loading:      PropTypes.bool,
    success:      PropTypes.bool,
    userId:       PropTypes.string,
    error:        PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.bool
    ])
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderItems);