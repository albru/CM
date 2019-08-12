import React from 'react';
import Contacts from '../../components/Sections/Contacts/Contacts';
import BreadCrumbs from '../../components/Navigation/BreadCrumbs/BreadCrumbs';

const contacts = props => {
    const crumbs = [
        {
            crumbName:'Главная',
            crumbHref: '/',
            linkType: 'prev'},
        {
            crumbName:'Контакты',
            crumbHref: '/contacts',
            linkType: 'current'
        }
    ];

    return (
        <Contacts>
            <BreadCrumbs crumbs={crumbs}/>
        </Contacts>
    )
};

export default contacts;