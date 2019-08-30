import  { portfolioData } from '../../components/Sections/Portfolio/Portfolioitems/portfolioDataObj/portfolioDataObj';
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

let updatedPortfolioData = [];
for (let key in portfolioData) {
    updatedPortfolioData.push(portfolioData[key])
}

const initPortfolioState = (arr, from, to) => {
    return {
        portfolioData: [...arr].slice(from,to),
        initial: 0,
        step: 2,
        items: to,
        maximumItems: false
    }
}

const initialState = initPortfolioState(updatedPortfolioData, 0, 4)

const addPortfolioItem = (state, action) => {
    let updatedState = updateObject(state, { 
        maximumItems: state.maximumItems, 
        items: state.items
    });
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