import React, { useMemo } from 'react';
import FeaturesItem from './FeaturesItem/FeaturesItem';
import { featuresData } from '../featuresDataObj/featuresDataObj';
import classes from './FeaturesItems.css';


const FeaturesItems = props => {
    const list = useMemo(() => {
        const featuresList = featuresData.map((item) => {
            return (
                <FeaturesItem 
                    key={item.desc}
                    icon={item.icon}
                    desc={item.desc}
                    />
            )
        })
        return featuresList;
    },[])
    return (
        <ul className={classes.FeaturesItems}>
            {list}
        </ul>
    )
};

export default FeaturesItems;