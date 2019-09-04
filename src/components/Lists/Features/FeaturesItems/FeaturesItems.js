import React from 'react';
import FeaturesItem from './FeaturesItem/FeaturesItem';
import { featuresData } from '../featuresDataObj/featuresDataObj';
import classes from './FeaturesItems.css';


const featuresItems = props => {
    const featuresList = featuresData.map((item) => {
        return (
            <FeaturesItem 
                key={item.desc}
                icon={item.icon}
                desc={item.desc}
                />
        )
    })
    return (
        <ul className={classes.FeaturesItems}>
            {featuresList}
        </ul>
    )
};

export default featuresItems;