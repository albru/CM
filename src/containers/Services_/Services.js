import React from 'react';
import ServicesSection from '../../components/Sections/Services_/Services';
import BreadCrumbs from '../../components/Navigation/BreadCrumbs/BreadCrumbs';
import ServicesList from '../../components/Sections/Services_/ServicesList/ServicesList';
import { breadCrumbsData } from '../../components/Navigation/BreadCrumbs/breadCrumbsDataObj/breadCrumbsDataObj';

const services = props => {
    const crumbs = breadCrumbsData.servicesCrumb;
    return (
        <ServicesSection >
            <BreadCrumbs crumbs={crumbs} />
            <ServicesList />
        </ServicesSection>
    )
};

export default services;