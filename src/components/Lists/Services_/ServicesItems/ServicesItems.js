import React, { useMemo } from 'react';

import ServicesItem from './ServicesItem/ServicesItem';

import { servicesData } from '../servicesData/servicesData';
import classes from './ServicesItems.css';

const ServicesItems = () => {

    const items = useMemo(() => {
        const servicesItems = servicesData.map((item, index) => {
            return (
                <ServicesItem 
                    key={index}
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