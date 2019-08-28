import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    modalIsVisible: false
}

const modalOpenHandler = (state, action) => {
    return updateObject( state, { modalIsVisible: true })
}

const modalCloseHandler = (state, action) => {
    return updateObject ( state, { modalIsVisible: false })
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MODAL_OPEN:
            return modalOpenHandler(state, action)
        case actionTypes.MODAL_CLOSE:
            return modalCloseHandler(state, action)
        default:
            return state
    }
}

export default modalReducer;
