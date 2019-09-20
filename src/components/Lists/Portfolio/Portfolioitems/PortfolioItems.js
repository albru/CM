import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import PortfolioItem from './PortfolioItem/PortfolioItem';

import { userUseApple } from '../../../../shared/utility';
import classes from './PortfolioItems.css';

const PortfolioItems = props => {
    
    let isMac = userUseApple();
    
    const list = useMemo(() => {
        return props.dataArr.map((item, index) => {
            return (
                <PortfolioItem 
                    key={index}
                    imgSrc={isMac ? item.imgSrcJpg : item.imgSrc}
                    imgAlt={item.imgAlt}
                    title={item.title}
                    desc={item.desc}
                />
            )
        });
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