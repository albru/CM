import  { portfolioData } from '../data/portfolioData';
import * as actionTypes from '../actions/actions';
import { updateObject } from '../../shared/utility';

const initialState = {
    portfolioData: [...portfolioData].slice(0, 4),
    initial: 0,
    step: 4,
    items: 4,
    maximumItems: false
}

const addPortfolioItem = (state, action) => {
    let updatedState = updateObject(state, { maximumItems: state.maximumItems, items: state.items, portfolioData: state.portfolioData });
    if (updatedState.items < portfolioData.length) {
        updatedState.items += updatedState.step;
        if(updatedState.items >= portfolioData.length) {
            updatedState.maximumItems = true;
        }
    }
    updatedState.portfolioData = [...portfolioData].slice(updatedState.initial, updatedState.items)
    return updatedState;
}

const portfolioReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_MORE_PORTFOLIO_ITEMS: 
            return addPortfolioItem(state, action)
        default: 
            return state;
    };
}

export default portfolioReducer;