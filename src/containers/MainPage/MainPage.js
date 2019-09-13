import React from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/_Aux/_Aux';
import Section from '../../components/Section/Section';
import FeaturesItems from '../../components/Lists/Features/FeaturesItems/FeaturesItems';
import ServicesItems from '../../components/Lists/Services_/ServicesItems/ServicesItems';
import BgImg from '../../components/BgImage/BgImage';
import Button from '../../components/UI/Button/Button';

const MainPage = props => {
    return (
        <Aux>
            <Section sectionType="Greetings">
                <h1>Наружные и интерьерные вывески, рекламные конструкции от производителя</h1>
                <BgImg />
            </Section>

            <Section sectionType="Services">
                <h2>Услуги</h2>
                <ServicesItems />
            </Section>

            <Section sectionType="Features">
                <h2>Преимущества</h2>
                <FeaturesItems />
            </Section>
            <Button btnType='MainButton'
                    clicked={props.modalToggle}>Заказать</Button>
        </Aux>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        modalToggle: () => dispatch({ type: 'MODAL_TOGGLE' })
    }
}

export default connect(null, mapDispatchToProps)(MainPage);