import React, { useMemo } from 'react';

import ServicesListItem from './ServicesListItem/ServicesListItem';

import { servicesListData } from '../servicesData/servicesData';
import classes from './ServicesList.css';

const ServicesList = props => {
    
    const items = useMemo(() => {
        const servicesItems = servicesListData.map((item, index) => {
            return <ServicesListItem 
                key={index}
                name={item.name}
                desc={item.desc}
            />
        })
        return servicesItems;
    },[])

    console.log(classes)

    return (
        <ul className={classes.ServicesList}>
            {items}
        </ul>
    )
}

export default ServicesList;