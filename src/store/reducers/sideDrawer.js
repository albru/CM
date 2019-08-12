import * as actionTypes from '../actions/actions';

const initialState = {
    sideDrawerIsVisible: false
}

const sideDrawerCloseHandler = (state, action) => {
    return {
        ...state,
        sideDrawerIsVisible: false
    }
}

const sideDrawerToggleHandler = (state, action) => {
    let toggle = !state.sideDrawerIsVisible;
    return {
        ...state,
        sideDrawerIsVisible: toggle
    }
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