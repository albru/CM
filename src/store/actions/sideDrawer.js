import * as actionTypes from './actionTypes';

export const sideDrawerToggle = () => {
    return {
        type: actionTypes.SIDE_DRAWER_TOGGLE
    }
}

export const sideDrawerClose = () => {
    return {
        type: actionTypes.SIDE_DRAWER_CLOSE
    }
}