import React from 'react';
import ContactsSection from '../../components/Sections/Contacts/Contacts';
import BreadCrumbs from '../../components/Navigation/BreadCrumbs/BreadCrumbs';
import Aux from '../../hoc/_Aux/_Aux';
import Map from '../../components/Contacts/Map/Map';
import Adress from '../../components/Contacts/Adress/Adress';
import Phone from '../../components/Contacts/Phone/Phone';
import classes from './Contacts.css';

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
                <div className={classes.Contacts}>
                    <Map />
                    <div>
                        <Adress />
                        <Phone />
                    </div>
                </div>
            </ContactsSection>
        </Aux>
    )
};

export default contacts;