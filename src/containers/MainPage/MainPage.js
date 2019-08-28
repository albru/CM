import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { updateObject, checkValidity } from '../../shared/utility';
import Aux from '../../hoc/_Aux/_Aux';
import GreetingsSection from '../../components/Sections/Greetings/Greetings';
import ServicesSection from '../../components/Sections/Services_/Services';
import FeaturesSection from '../../components/Sections/Features/Features';
import FeaturesItems from '../../components/Sections/Features/FeaturesItems/FeaturesItems';
import ServicesItems from '../../components/Sections/Services_/ServicesItems/ServicesItems';
import Modal from '../../components/UI/Modal/Modal';
import { inputData } from '../../store/data/inputData';
import Input from '../../components/UI/Input/Input';

const MainPage = props => {

    const [ inputDataObj, setInputDataObj ] = useState(inputData);

    const inputChangeHandler = (event, controlName) => {
        const updatedValue = updateObject(inputDataObj, {
            [controlName]: updateObject(inputDataObj[controlName], {
            value: event.target.value,
            touched: true,
            valid: checkValidity(
                event.target.value, 
                inputDataObj[controlName].validation
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
        return (
            <Input 
                key={formElement.id}
                elementType={formElement.elementType}
                elementConfig={formElement.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={event => inputChangeHandler(event, formElement.id)}
            />
        )
    })

    console.log(inputDataObj)

    const form = (
        <form>
            {formContent}
        </form>
    )

    console.log(formElementsArray)
    
    return (
        <Aux>
            <Modal show={props.showModal} clicked={props.closeModal}>
                {form}
            </Modal>
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

export default MainPage;