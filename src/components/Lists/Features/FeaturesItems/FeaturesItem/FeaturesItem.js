import React from 'react';
import classes from './FeaturesItem.css';

const featuresItem = props => {
      
        return (
            <li className={classes.FeaturesItem}>
                <div>
                    <img src={props.imgSrc} alt={props.imgAlt}></img>
                </div>
                <div>
                    <p>{props.desc}</p>
                </div>
            </li>
        )
};

export default featuresItem;