import React, { useMemo } from 'react';
import { servicesListData } from '../servicesDataObj/servicesDataObj';
import ServicesListItem from './ServicesListItem/ServicesListItem';
import classes from './ServicesList.css';


const ServicesList = props => {
    
    const items = useMemo(() => {
        const servicesItems = servicesListData.map((item, index) => {
            return <ServicesListItem 
                key={item.name}
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