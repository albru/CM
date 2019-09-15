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
    data: changedState,
    fetchResult: {
        error: null,
        success: null,
        loading: null
    },
    showModal: false
};

const modalFormDataHandler = (state, action) => {
    const inputName = action.inputName;
    const newState = action.updatedState
    return updateObject(state, {
        data: updateObject(state.data, {
            [inputName]: updateObject(state.data[inputName], {
                value: newState[inputName].value,
                valid: newState[inputName].valid})
            })
        }
    )
}

const modalToggleHandler = (state, action) => {
    return updateObject(state, {showModal: !state.showModall})
}

const modalCloseHandler = (state, action) => {
    return updateObject(state, {showModal: false})
}

const modalFetchSuccessHandler = (state, action) => {
    return updateObject(state, { fetchResult: 
        updateObject(state.fetchResult, {
        success: true
    }) })
}
const modalFetchErrorHandler = (state, action) => {
    return updateObject(state, { fetchResult: 
        updateObject(state.fetchResult, {
        error: action.error
    }) })
}

const modalClearFetchError = (state, action) => {
    return updateObject(state, { fetchResult: 
        updateObject(state.fetchResult, {
        error: null
    }) })
}


const modalFormReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.MODAL_TOGGLE:
            return modalToggleHandler(state, action)
        case actionTypes.MODAL_CLOSE:
            return modalCloseHandler(state, action)
        case actionTypes.MODAL_FETCH_SUCCESS:
            return modalFetchSuccessHandler(state, action)
        case actionTypes.MODAL_FETCH_ERROR:
            return modalFetchErrorHandler(state, action)
        case actionTypes.MODAL_CLEAR_FETCH_ERROR:
            return modalClearFetchError(state, action)
        default:
            return state;
    }
};

export default modalFormReducer;