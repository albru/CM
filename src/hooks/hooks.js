import React, { useMemo } from 'react';
import { useState } from 'react';
import { updateObject, checkValidity } from '../shared/utility';

import Input from '../components/Input/Input';

export const useInputChangeHandler = (obj) => {    
    const [inputData, setInputData] = useState(obj);
    function inputChangeHandler(event, inputName) {
        const updatedValue = updateObject(inputData, {
            [inputName]: updateObject(inputData[inputName], {
                value: event.target.value,
                valid: checkValidity(
                    event.target.value,
                    inputData[inputName].validation
                ),
                touched: true
            })
        })
        setInputData(updatedValue)
    }
    return {inputChangeHandler: inputChangeHandler, inputData: inputData}
}

export const useInputFabric = (arr, handler) => {
    const list = useMemo(() => {
        return arr.map(formElement => {
            return (
                <Input 
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    label={formElement.config.label}
                    changed={event => handler(event, formElement.id)}
                />
            )
        })
    },[arr, handler])
    return {list: list}
}

// const initialState = {
//   loading: false,
//   error: null,
//   data: null,
//   extra: null,
//   identifier: null
// };

// const httpReducer = (curHttpState, action) => {
//   switch (action.type) {
//     case 'SEND':
//       return {
//         loading: true,
//         error: null,
//         data: null,
//         extra: null,
//         identifier: action.identifier
//       };
//     case 'RESPONSE':
//       return {
//         ...curHttpState,
//         loading: false,
//         data: action.responseData,
//         extra: action.extra
//       };
//     case 'ERROR':
//       return { loading: false, error: action.errorMessage };
//     case 'CLEAR':
//       return initialState;
//     default:
//       throw new Error('Should not be reached!');
//   }
// };

// const useHttp = () => {
//   const [httpState, dispatchHttp] = useReducer(httpReducer, initialState);

//   const clear = useCallback(() => dispatchHttp({ type: 'CLEAR' }), []);

//   const sendRequest = useCallback(
//     (url, method, body, reqExtra, reqIdentifer) => {
//       dispatchHttp({ type: 'SEND', identifier: reqIdentifer });
//       fetch(url, {
//         method: method,
//         body: body,
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//         .then(response => {
//           return response.json();
//         })
//         .then(responseData => {
//           dispatchHttp({
//             type: 'RESPONSE',
//             responseData: responseData,
//             extra: reqExtra
//           });
//         })
//         .catch(error => {
//           dispatchHttp({
//             type: 'ERROR',
//             errorMessage: 'Something went wrong!'
//           });
//         });
//     },
//     []
//   );

//   return {
//     isLoading: httpState.loading,
//     data: httpState.data,
//     error: httpState.error,
//     sendRequest: sendRequest,
//     reqExtra: httpState.extra,
//     reqIdentifer: httpState.identifier,
//     clear: clear
//   };
// };

// export default useHttp;
