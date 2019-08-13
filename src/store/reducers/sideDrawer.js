import * as actionTypes from '../actions/actions';
import { updateObject } from '../../shared/utility';

const initialState = {
    sideDrawerIsVisible: false
}

const sideDrawerCloseHandler = (state, action) => {
    return updateObject ( state, { sideDrawerIsVisible: false })
}

const sideDrawerToggleHandler = (state, action) => {
    return updateObject( state, { sideDrawerIsVisible: !state.sideDrawerIsVisible })
}

const sideDrawerReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SIDE_DRAWER_TOGGLE:
            return sideDrawerToggleHandler(state, action)
        case actionTypes.SIDE_DRAWER_CLOSE:
            return sideDrawerCloseHandler(state, action)
        default:
            return state;
    }
};

export default sideDrawerReducer;