import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
import { inputData } from '../../components/Input/inputDataObj/inputDataObj';

const initialState = inputData;

const orderDataHandler = (state, action) => {
    return updateObject( state, { action })
}

const orderFormReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes:
            return orderDataHandler(updateObject(state, {
                new: 'newstate'
            }))
        default:
            return state;
    }
};

export default orderFormReducer;