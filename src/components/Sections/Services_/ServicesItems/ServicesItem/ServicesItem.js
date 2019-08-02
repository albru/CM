import React from 'react';

const servicesItem = props => {
    return (
        <li>
            <a href={props.href}>
                <img src={props.imgSrc} alt={props.imgAlt}></img>
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
            </a>
        </li>
    )
};

export default servicesItem;