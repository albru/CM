import React, { useState } from 'react';
import { inputData } from '../components/Input/inputDataObj/inputDataObj';

export const InputContext = React.createContext({
    modalInputData: {},
    setModalInputData: () => {},
    orderInputData: {},
    setOrderInputData: () => {}
});

const InputContextProvider = props => {
    const [modalInputDataObj, setModalInputDataObj] = useState(inputData.modalInputData);
    const modalDataObkHandler = (obj) => {
        setModalInputDataObj(obj)
    }

    return (
        <InputContext.Provider value={{
            modalInputData: modalInputDataObj,
            setModalInputData: modalDataObkHandler
            }}>
            {props.children}
        </InputContext.Provider>
    )
}

export default InputContextProvider;