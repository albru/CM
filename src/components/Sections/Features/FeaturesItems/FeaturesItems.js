import React from 'react';
import FeaturesItem from './FeaturesItem/FeaturesItem';
import { featuresData } from '../../../../store/data/featuresData';
import classes from './FeaturesItems.css';


const featuresItems = props => {

    const featuresList = featuresData.map((item,index) => {
        return (
            <FeaturesItem 
                key={index}
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
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