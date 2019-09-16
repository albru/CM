import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
import { inputData } from '../../components/Input/inputDataObj/inputDataObj';

const changedState = {}
for (let key in inputData.modalInputData) {
    changedState[key] = {
        value: inputData.modalInputData[key].value, 
        valid: inputData.modalInputData[key].valid 
    }
}

const initialState = {
    fetchResult: {
        error: null,
        success: null,
        loading: null
    },
    showModal: false
};

const modalToggleHandler = (state, action) => {
    return updateObject(state, {showModal: !state.showModall})
}

const modalCloseHandler = (state, action) => {
    return updateObject(state, {showModal: false})
}

const modalFetchSuccessHandler = (state, action) => {
    return updateObject(state, { fetchResult: 
        updateObject(state.fetchResult, {
        success: true,
        loading: false
    }) })
}
const modalFetchErrorHandler = (state, action) => {
    return updateObject(state, { fetchResult: 
        updateObject(state.fetchResult, {
        error: action.error,
        loading: false
    }) })
}

const modalClearFetchError = (state, action) => {
    return updateObject(state, { fetchResult: 
        updateObject(state.fetchResult, {
        error: null,
        success: null
    }) })
}

const modalFetchStart = (state, action) => {
    return updateObject(state, { fetchResult: 
        updateObject(state.fetchResult, {
        loading: true
    }) })
}


const modalFormReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.MODAL_TOGGLE:
            return modalToggleHandler(state, action)
        case actionTypes.MODAL_CLOSE:
            return modalCloseHandler(state, action)
        case actionTypes.MODAL_FETCH_START:
            return modalFetchStart(state, action)
        case actionTypes.MODAL_FETCH_SUCCESS:
            return modalFetchSuccessHandler(state, action)
        case actionTypes.MODAL_FETCH_ERROR:
            return modalFetchErrorHandler(state, action)
        case actionTypes.MODAL_FETCH_CLEAR_ERROR:
            return modalClearFetchError(state, action)
        default:
            return state;
    }
};

export default modalFormReducer;