import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
import { inputData } from '../../components/Input/inputDataObj/inputDataObj';

const initialState = inputData;

const orderDataHandler = (state, action) => {
    return updateObject ( state, { 
        action
    })
}

const orderReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_ORDER_DATA:
            return order(state, action)
        default:
            return state;
    }
};

export default orderInputHandler;