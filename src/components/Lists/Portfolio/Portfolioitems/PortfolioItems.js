import React from 'react';
import classes from './PortfolioItems.css';
import PortfolioItem from './PortfolioItem/PortfolioItem';
import { userUseApple } from '../../../../shared/utility';

const PortfolioItems = props => {
    let isMac = userUseApple();
    
    let portfolioList = props.dataObj.portfolioData.map((item, index) => {
        return (
            <PortfolioItem 
                key={item.title}
                imgSrc={isMac ? item.imgSrcJpg : item.imgSrc}
                imgAlt={item.imgAlt}
                title={item.title}
                desc={item.desc}
            />
        )
    });
    

    return (
        <ul className={classes.PortfolioItems}>
            {portfolioList}
        </ul>
    )
};




export default PortfolioItems;