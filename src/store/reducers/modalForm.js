import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
import { modalUserData } from '../../components/Forms/ModalForm/modalUserData/modalUserData';

const changedState = {}
for (let key in modalUserData) {
    changedState[key] = {
        value: modalUserData[key].value, 
        valid: modalUserData[key].valid 
    }
}

const initialState = {
    fetchResult: {
        error: null,
        success: null,
        loading: null
    },
    modalIsVis: false
};

const modalToggleHandler = (state, action) => {
    return updateObject(state, {modalIsVis: !state.modalIsVis})
}

const modalCloseHandler = (state, action) => {
    return updateObject(state, {modalIsVis: false})
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