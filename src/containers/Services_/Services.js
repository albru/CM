import React from 'react';

import Section from '../../components/Section/Section';
import BreadCrumbs from '../../components/Navigation/BreadCrumbs/BreadCrumbs';
import ServicesList from '../../components/Lists/Services_/ServicesList/ServicesList';

import { breadCrumbsData } from '../../components/Navigation/BreadCrumbs/breadCrumbsData/breadCrumbsData';

const services = () => {
    const crumbs = breadCrumbsData.servicesCrumb;
    return (
        <Section sectionType="Services" >
            <h1>Услуги</h1>
            <BreadCrumbs crumbs={crumbs} />
            <ServicesList />
        </Section>
    )
};

export default services;