import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    modalIsVisible: false,
    modalDataSend: false,
    username: null
}

const modalOpenHandler = (state, action) => {
    return updateObject( state, { modalIsVisible: true })
}

const modalCloseHandler = (state, action, event) => {
    return updateObject ( state, { modalIsVisible: false })
}

const modalDataSendHandler = (state, action, event) => {
    return updateObject ( state, { modalDataSend: true, username: action.username })
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MODAL_OPEN:
            return modalOpenHandler(state, action)
        case actionTypes.MODAL_CLOSE:
            return modalCloseHandler(state, action)
        case actionTypes.MODAL_CONTENT_CHANGE:
            return modalDataSendHandler(state, action)
        default:
            return state
    }
}

export default modalReducer;
