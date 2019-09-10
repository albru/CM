import React, { useMemo } from 'react';

import { servicesData } from '../servicesDataObj/servicesDataObj';
import ServicesItem from './ServicesItem/ServicesItem';
import classes from './ServicesItems.css';

const ServicesItems = (props) => {

    const items = useMemo(() => {
        const servicesItems = servicesData.map((item, index) => {
            return (
                <ServicesItem 
                    key={item.title}
                    title={item.title}
                    href={item.href}
                    imgSrc={item.imgSrc}
                    imgAlt={item.imgAlt}
                    desc={item.desc} />
            )
        })
        return servicesItems;
    },[])
    

    return (
        <ul className={classes.ServicesItems}>
            {items}
        </ul>
    )
};

export default ServicesItems;