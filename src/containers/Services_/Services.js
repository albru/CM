import React from 'react';
import Services from '../../components/Sections/Services_/Services';
import BreadCrumbs from '../../components/Navigation/BreadCrumbs/BreadCrumbs';


const crumbs = [
    {
        crumbName:'Главная',
        crumbHref: '/',
        linkType: 'prev'},
    {
        crumbName:'Услуги',
        crumbHref: '/services',
        linkType: 'current'
    }
];

const services = props => {
    return (
        <Services >
            <BreadCrumbs crumbs={crumbs} />
        </Services>
    )
};

export default services;