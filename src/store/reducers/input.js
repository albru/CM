
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    allInputIsValid: false,
    phoneIsValid: false,
    nameIsValid: false
}

const inputReducer = (state = initialState, action) =>  {
    switch(action.type) {
        case actionTypes.INPUT_CHECK_VALIDITY_BEFORE_SENT:
            return updateObject( state, { 
                phoneIsValid: action.phoneIsValid,
                nameIsValid: action.nameIsValid,
                allInputIsValid: action.phoneIsValid && action.nameIsValid})
        default:
            return state;

    }
}

export default inputReducer;