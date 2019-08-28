import React from 'react';
import ContactsSection from '../../components/Sections/Contacts/Contacts';
import BreadCrumbs from '../../components/Navigation/BreadCrumbs/BreadCrumbs';
import Aux from '../../hoc/_Aux/_Aux';
import Map from '../../components/Contacts/Map/Map';
import Adress from '../../components/Contacts/Adress/Adress';
import Phone from '../../components/Contacts/Phone/Phone';
import classes from './Contacts.css';
import { breadCrumbsData } from '../../components/Navigation/BreadCrumbs/breadCrumbsDataObj/breadCrumbsDataObj';

const contacts = props => {
    const crumbs = breadCrumbsData.contactsCrumb;
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
// mac commit

export default contacts;