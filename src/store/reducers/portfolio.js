import  { portfolioData } from '../../components/Sections/Portfolio/Portfolioitems/portfolioDataObj/portfolioDataObj';
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

let updatedPortfolioData = [];
for (let key in portfolioData) {
    updatedPortfolioData.push(portfolioData[key])
}

const initialState = {
    portfolioData: [...updatedPortfolioData].slice(0, 4),
    initial: 0,
    step: 4,
    items: 4,
    maximumItems: false
}

const addPortfolioItem = (state, action) => {
    let updatedState = updateObject(state, { maximumItems: state.maximumItems, items: state.items, portfolioData: state.portfolioData });
    if (!updatedState.maximumItems && updatedState.items < updatedPortfolioData.length) {
        updatedState.items += updatedState.step;
        if(updatedState.items >= updatedPortfolioData.length) {
            updatedState.maximumItems = true;
        }
    }
    updatedState.portfolioData = [...updatedPortfolioData].slice(updatedState.initial, updatedState.items)
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