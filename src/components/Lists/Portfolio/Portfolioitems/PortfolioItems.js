import React, { useMemo } from 'react';
import classes from './PortfolioItems.css';
import PortfolioItem from './PortfolioItem/PortfolioItem';
import { userUseApple } from '../../../../shared/utility';
import PropTypes from 'prop-types';

const PortfolioItems = props => {
    
    let isMac = userUseApple();
    
    const list = useMemo(() => {
        let portfolioList = props.dataArr.map((item, index) => {
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
        return portfolioList;
    },[isMac, props.dataArr])


    return (
        <ul className={classes.PortfolioItems}>
            {list}
        </ul>
    )
};

PortfolioItems.propTypes = {
    dataArr: PropTypes.array
}

export default PortfolioItems;