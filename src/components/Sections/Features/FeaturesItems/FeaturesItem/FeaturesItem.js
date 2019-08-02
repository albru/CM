import React from 'react';

const featuresItem = props => {
      
        return (
            <li>
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