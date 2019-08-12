import React from 'react';
import ContactsSection from '../../components/Sections/Contacts/Contacts';
import BreadCrumbs from '../../components/Navigation/BreadCrumbs/BreadCrumbs';
import Aux from '../../hoc/_Aux/_Aux';

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
        <Aux>
            <ContactsSection>
                <BreadCrumbs crumbs={crumbs}/>
            </ContactsSection>
        </Aux>
    )
};

export default contacts;