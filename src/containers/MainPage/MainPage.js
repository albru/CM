import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions/actionTypes';
import { updateObject, checkValidity } from '../../shared/utility';
import Aux from '../../hoc/_Aux/_Aux';
import GreetingsSection from '../../components/Sections/Greetings/Greetings';
import ServicesSection from '../../components/Sections/Services_/Services';
import FeaturesSection from '../../components/Sections/Features/Features';
import FeaturesItems from '../../components/Sections/Features/FeaturesItems/FeaturesItems';
import ServicesItems from '../../components/Sections/Services_/ServicesItems/ServicesItems';
import BgImg from '../../components/Sections/Greetings/BgImage/BgImage';
import Modal from '../../components/UI/Modal/Modal';
import { inputData } from '../../store/data/inputData';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

const MainPage = props => {

    const [ inputDataObj, setInputDataObj ] = useState(inputData);

    const inputChangeHandler = (event, inputName) => {
        console.log(inputName,' control')
        const updatedValue = updateObject(inputDataObj, {
            [inputName]: updateObject(inputDataObj[inputName], {
            value: event.target.value,
            touched: true,
            valid: checkValidity(
                event.target.value, 
                inputDataObj[inputName].validation
                )
            })

        })
        setInputDataObj(updatedValue)
    }

    const formElementsArray = [];
    for (let key in inputDataObj) {
        formElementsArray.push({
            id: key,
            config: inputDataObj[key]
        })
    }

    const formContent = formElementsArray.map(formElement => {
        console.log(formElement)
        return (
            <Input 
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={event => inputChangeHandler(event, formElement.id)}
            />
        )
    })

    const form = (
        <form>
            {formContent}
            <Button btnType="MainButton"
                    clicked={props.modalClose}>Отправить</Button>
        </form>
    )

    return (
        <Aux>
            <Modal show={props.modalIsVis} 
                close={props.modalClose}>
                {form}
            </Modal>
            <GreetingsSection>
                <Button btnType='MainButton'
                        clicked={props.modalOpen}>Заказать</Button>
                <BgImg />
            </GreetingsSection>

            <ServicesSection>
                <ServicesItems />
            </ServicesSection>

            <FeaturesSection>
                <FeaturesItems />
            </FeaturesSection>
        </Aux>
    )
};

const mapStateToProps = state => {
    return {
        modalIsVis: state.modal.modalIsVisible
    }
}

const mapDispatchToProps = dispatch => {
    return {
        modalOpen: () => dispatch({type: actionTypes.MODAL_OPEN}),
        modalClose: () => dispatch({type: actionTypes.MODAL_CLOSE})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);