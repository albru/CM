import React from 'react';
import { servicesListData } from '../servicesDataObj/servicesDataObj';
import ServicesListItem from './ServicesListItem/ServicesListItem';
import classes from './ServicesList.css';


const servicesList = props => {
    const servicesItems = servicesListData.map((item, index) => {
        return <ServicesListItem 
            key={item.name}
            name={item.name}
            href={item.href}
        />
    })

    return (
        <ul className={classes.ServicesList}>
            {servicesItems}
        </ul>
    )
}

export default servicesList;