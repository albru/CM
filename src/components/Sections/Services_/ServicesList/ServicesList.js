import React from 'react';
import { servicesListData } from '../../../../store/data/servicesData';
import ServicesListItem from './ServicesListItem/ServicesListItem';
import classes from './ServicesList.css';


const servicesList = props => {
    const servicesItems = servicesListData.map((item, index) => {
        return <ServicesListItem 
            name={item.name}
            href={item.href}
            key={index}
        />
    })

    return (
        <ul className={classes.ServicesList}>
            {servicesItems}
        </ul>
    )
}

export default servicesList;