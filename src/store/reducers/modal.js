import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    modalIsVisible: false,
    modalDataSend: false,
    username: null,
    modalError: false,
    errorMsg: null
}

const modalOpenHandler = (state, action) => {
    return updateObject( state, { 
        modalIsVisible: true 
    })
}

const modalCloseHandler = (state, action) => {
    return updateObject ( state, { 
        modalIsVisible: false,
        modalError: false
    })
}

const modalDataSendHandler = (state, action) => {
    return updateObject ( state, { 
        modalDataSend: true, 
        username: action.username 
    })
}

const modalError = (state, action) => {
    return updateObject( state, { 
        modalError: true, 
        errorMsg: action.errorName
    })
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MODAL_OPEN:
            return modalOpenHandler(state, action)
        case actionTypes.MODAL_CLOSE:
            return modalCloseHandler(state, action)
        case actionTypes.MODAL_CONTENT_SEND:
            return modalDataSendHandler(state, action)
        case actionTypes.MODAL_ERROR:
            return modalError(state, action)
        default:
            return state
    }
}

export default modalReducer;
