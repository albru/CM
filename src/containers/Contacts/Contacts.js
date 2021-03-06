import React from 'react';

import Section from '../../components/Section/Section';
import BreadCrumbs from '../../components/Navigation/BreadCrumbs/BreadCrumbs';
import Aux from '../../hoc/_Aux/_Aux';
import Map from '../../components/Contacts/Map/Map';
import Adress from '../../components/Contacts/Adress/Adress';
import Phone from '../../components/Contacts/Phone/Phone';
import Email from '../../components/Contacts/Email/Email';
import classes from './Contacts.css';

import { breadCrumbsData } from '../../components/Navigation/BreadCrumbs/breadCrumbsData/breadCrumbsData';

const contacts = () => {
    const crumbs = breadCrumbsData.contactsCrumb;
    return (
        <Aux>
            <Section sectionType="Contacts">
                <h1>Контакты</h1>
                <BreadCrumbs crumbs={crumbs}/>
                <div className={classes.Contacts}>
                    <Map />
                    <div>
                        <Adress />
                        <Phone />
                        <Email />
                    </div>
                </div>                
            </Section>
        </Aux>
    )
};

export default contacts;