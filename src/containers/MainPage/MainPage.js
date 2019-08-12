import React from 'react';
import Aux from '../../hoc/_Aux/_Aux';
import Greetings from '../../components/Sections/Greetings/Greetings';
import Services from '../../components/Sections/Services_/Services';
import Features from '../../components/Sections/Features/Features';
import FeaturesItems from '../../components/Sections/Features/FeaturesItems/FeaturesItems';
import ServicesItems from '../../components/Sections/Services_/ServicesItems/ServicesItems';

const mainPage = props => {
    console.log(props, 'MainPage PROPS');
    return (
        <Aux>
            <Greetings />
            <Services>
                <ServicesItems />
            </Services>
            <Features>
                <FeaturesItems />
            </Features>
        </Aux>
    )
};

export default mainPage;