import React, { useState } from 'react';
import Aux from '../../hoc/_Aux/_Aux';
import Section from '../../components/Section/Section';
import PortfolioItems from '../../components/Lists/Portfolio/Portfolioitems/PortfolioItems';
import BreadCrumbs from '../../components/Navigation/BreadCrumbs/BreadCrumbs';
import Button from '../../components/UI/Button/Button';
import { updateObject } from '../../shared/utility';
import { breadCrumbsData } from '../../components/Navigation/BreadCrumbs/breadCrumbsDataObj/breadCrumbsDataObj';
import { portfolioData } from '../../components/Lists/Portfolio/portfolioDataObj/portfolioDataObj';

const Portfolio = props => {
    let updatedPortfolioData = [];
    for (let key in portfolioData) {
        updatedPortfolioData.push(portfolioData[key])
    }
    
    const [portfolioState, setPortfolioState] = useState({
        portfolioData: updatedPortfolioData.slice(0,4),
        initial: 0,
        step: 2,
        items: 4,
        maximumItems: false
    })

    const addPortfolioItem = () => {
        let updatedState = updateObject(portfolioState, { 
            maximumItems: portfolioState.maximumItems, 
            items: portfolioState.items
        });
        if (!updatedState.maximumItems && updatedState.items < updatedPortfolioData.length) {
            updatedState.items += updatedState.step;
            if(updatedState.items >= updatedPortfolioData.length) {
                updatedState.maximumItems = true;
            }
        }
        updatedState.portfolioData = [...updatedPortfolioData].slice(updatedState.initial, updatedState.items)
        setPortfolioState(updatedState)
    }
    const crumbs = breadCrumbsData.portfolioCrumb;
    const showMoreButton = (
        portfolioState.maximumItems === false ?
         <Button clicked={addPortfolioItem} 
            btnType="MainButton">Показать еще</Button> :
         null
    );

    return (
        <Aux>
            <Section sectionType="Portfolio"> 
                <h1>Портфолио</h1>
                <BreadCrumbs crumbs={crumbs} />
                <PortfolioItems dataArr={portfolioState.portfolioData}/>
                {showMoreButton}
            </Section>
        </Aux>
    )
};

export default Portfolio;