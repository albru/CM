import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
import { inputData } from '../../components/Input/inputDataObj/inputDataObj';

const changedState = {};

for (let key in inputData.orderInputData) {
    changedState[key] = inputData.orderInputData[key].value
}

const initialState = {
    data: changedState,
    fetchResult: {
        error: null,
        success: null,
        loading: null
    }
}

const orderFetchStartHandler = (state, action) => {
    return updateObject(state, { 
        data: updateObject( state.data, {
            ...action.orderData
        })
    })
}

const orderFetchSuccessHandler = (state, action) => {
    return updateObject(state, { 
        fetchResult: updateObject(state.fetchResult, {
            success: true
    }) })
}
const orderFetchErrorHandler = (state, action) => {
    return updateObject(state, { fetchResult: 
        updateObject(state.fetchResult, {
        error: action.error
    }) })
}

const orderClearFetchError = (state, action) => {
    return updateObject(state, { fetchResult: 
        updateObject(state.fetchResult, {
        error: null
    }) })
}

const orderClearFetchSuccess = (state, action) => {
    return updateObject(state, { fetchResult: 
        updateObject(state.fetchResult, {
        success: null
    }) })
}

const orderFormReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ORDER_FETCH_POST_START: return orderFetchStartHandler(state, action)
        case actionTypes.ORDER_FETCH_POST_SUCCESS: return orderFetchSuccessHandler(state, action)
        case actionTypes.ORDER_FETCH_POST_ERROR: return orderFetchErrorHandler(state, action)
        case actionTypes.ORDER_FETCH_POST_LOADING: return orderClearFetchError(state, action)
        case actionTypes.ORDER_FETCH_POST_CLEAR_ERROR: return orderClearFetchError(state, action)
        case actionTypes.ORDER_FETCH_POST_CLEAR_SUCCESS: return orderClearFetchSuccess(state, action)
        default: return state;
    }
};

export default orderFormReducer;