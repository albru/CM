import React, { useState } from 'react';
import { inputData } from '../components/UI/Input/inputDataObj/inputDataObj';

export const InputContext = React.createContext({
    inputData: {},
    setDataObj: () => {}
});

const InputContextProvider = props => {
    const [inputDataObj, setInputDataObj] = useState(inputData);
    const dataObjHandler = (obj) => {
        setInputDataObj(obj)
    }

    return (
        <InputContext.Provider value={{
            inputData: inputDataObj,
            setDataObj: dataObjHandler
            }}>
            {props.children}
        </InputContext.Provider>
    )
}

export default InputContextProvider;