import React from 'react';

import ServicesItem from './ServicesItem/ServicesItem';

const servicesItems = (props) => {
    const servicesData = [
        {
            title: 'Card',
            href: '/11',
            imgSrc: '#',
            imgAlt: 'Card',
            desc: 'aas333221vv'
        },
        {
            title: 'Card2',
            href: '/22',
            imgSrc: '#',
            imgAlt: 'Card2',
            desc: '222dasdaw'
        },
        {
            title: 'Card3',
            href: '/33',
            imgSrc: '#',
            imgAlt: 'Card3',
            desc: 'adsasadasdasdas'
        }
    ]
    const servicesList = servicesData.map((item, index) => {
        return (
            <ServicesItem 
                title={item.title}
                href={item.href}
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
                desc={item.desc} />
        )
    })

    return (
        <ul>
            {servicesList}
        </ul>
    )
};

export default servicesItems;