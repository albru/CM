import React from 'react';
import Aux from '../../hoc/_Aux/_Aux';
import Greetings from '../../components/Sections/Greetings/Greetings';
import Services from '../../components/Sections/Services_/Services';
import Features from '../../components/Sections/Features/Features';

const mainPage = props => {
    console.log(props, 'MainPage PROPS');
    return (
        <Aux>
            <Greetings />
            <Services />
            <Features />
        </Aux>
    )
};

export default mainPage;