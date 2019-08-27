import React from 'react';
import Aux from '../../hoc/_Aux/_Aux';
import GreetingsSection from '../../components/Sections/Greetings/Greetings';
import ServicesSection from '../../components/Sections/Services_/Services';
import FeaturesSection from '../../components/Sections/Features/Features';
import FeaturesItems from '../../components/Sections/Features/FeaturesItems/FeaturesItems';
import ServicesItems from '../../components/Sections/Services_/ServicesItems/ServicesItems';
import Modal from '../../components/UI/Modal/Modal';

const mainPage = props => {
    return (
        <Aux>
            <Modal />
            <GreetingsSection />

            <ServicesSection>
                <ServicesItems />
            </ServicesSection>

            <FeaturesSection>
                <FeaturesItems />
            </FeaturesSection>
        </Aux>
    )
};

export default mainPage;