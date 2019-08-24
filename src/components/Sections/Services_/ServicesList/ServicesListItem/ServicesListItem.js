import React from 'react';


const servicesListItem = props => {
    return (
        <li>
            <a href={props.href}>{props.name}</a>
        </li>
    )
}

export default servicesListItem;