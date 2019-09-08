

import React, { useState } from 'react';

export const ModalContext = React.createContext({
    isShow: null,
    open: () => {},
    toggle: () => {},
    close: () => {}
});

const ModalContextProvider = props => {
    const [showModal, setShowModal] = useState(false);

    const modalToggleHandler = () => {
        setShowModal(!showModal)
        console.log('TOGGLE')
    }

    const modalCloseHandler = () => {
        setShowModal(false)
    }

    const modalShowHandler = () => {
        setShowModal(true)
    }

    return (
        <ModalContext.Provider value={{
            isShow: showModal,
            open: modalShowHandler,
            toggle: modalToggleHandler,
            close: modalCloseHandler
            }}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider;