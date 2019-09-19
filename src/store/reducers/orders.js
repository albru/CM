import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';


const initialState = {
    data: null,
    fetchResult: {
        error: null,
        success: null,
        loading: false
    }
}

const ordersFetchStartHandler = (state, action) => {
    return updateObject(state, { 
        fetchResult: updateObject(state.fetchResult, {
            loading: true
    }) })
}

const ordersFetchSuccessHandler = (state, action) => {
    return updateObject(state, { 
        data: action.data,
        fetchResult: updateObject(state.fetchResult, {
            success: true,
            loading: false
        }) 
    })
}

const ordersFetchErrorHandler = (state, action) => {
    return updateObject(state, { fetchResult: 
        updateObject(state.fetchResult, {
            error: action.error,
            loading: false
        }) })
    }
    
    const ordersClearFetchRes = (state, action) => {
        return updateObject(state, { fetchResult: 
            updateObject(state.fetchResult, {
                error: null,
                success: null,
                loading: false
            }) })
        }
        
    const ordersDeleteHandler = (state, action) => {
        return updateObject(state, { 
            data: action.data,
            fetchResult: updateObject(state.fetchResult, {
                success: true,
                loading: false
            }) 
        })
    }
        
        const ordersReducer = (state = initialState, action) => {
            switch(action.type) {
                case actionTypes.ORDERS_FETCH_GET_START: return ordersFetchStartHandler(state, action)
                case actionTypes.ORDERS_FETCH_GET_SUCCESS: return ordersFetchSuccessHandler(state, action)
                case actionTypes.ORDERS_FETCH_GET_ERROR: return ordersFetchErrorHandler(state, action)
                case actionTypes.ORDERS_FETCH_GET_CLEAR: return ordersClearFetchRes(state, action)
                case actionTypes.ORDERS_FETCH_POST_DELETE_SUCCESS: return ordersDeleteHandler(state, action)
        default: return state;
    }
};

export default ordersReducer;