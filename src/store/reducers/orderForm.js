import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
import { orderUserData } from '../../components/Forms/OrderForm/orderUserData/orderUserData';

const changedState = {};

for (let key in orderUserData) {
    changedState[key] = orderUserData[key].value
}

export const initialState = {
    data: changedState,
    fetchResult: {
        error: null,
        success: null,
        loading: false
    }
}

const orderFetchStartHandler = (state, action) => {
    return updateObject(state, { 
        fetchResult: updateObject(state.fetchResult, {
            loading: true
    }) })
}

const orderFetchSuccessHandler = (state, action) => {
    return updateObject(state, {
        data: action.data,
        userId: action.userId,
        fetchResult: updateObject(state.fetchResult, {
            success: true,
            loading: false
    }) })
}
const orderFetchErrorHandler = (state, action) => {
    return updateObject(state, { fetchResult: 
        updateObject(state.fetchResult, {
        error: action.error,
        loading: false
    }) })
}

const orderClearFetchRes = (state, action) => {
    return updateObject(state, { fetchResult: 
        updateObject(state.fetchResult, {
        error: null,
        success: null,
        loading: false
    }) })
}

const orderFormReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ORDER_FETCH_POST_START: return orderFetchStartHandler(state, action)
        case actionTypes.ORDER_FETCH_POST_SUCCESS: return orderFetchSuccessHandler(state, action)
        case actionTypes.ORDER_FETCH_POST_ERROR: return orderFetchErrorHandler(state, action)
        case actionTypes.ORDER_FETCH_POST_CLEAR: return orderClearFetchRes(state, action) 
        default: return state;
    }
};

export default orderFormReducer;