import React from 'react';
import { connect } from 'react-redux';
import classes from './PortfolioItems.css';
import PortfolioItem from './PortfolioItem/PortfolioItem';
import { userUseApple } from '../../../../shared/utility';



const portfolioItems = props => {
    let isMac = userUseApple();
    let portfolioList = props.portfolioData.map((item, index) => {
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


const mapStateToProps = state => {
    return {
        portfolioData: state.portfolio.portfolioData,
    }
};


export default connect(mapStateToProps)(portfolioItems);