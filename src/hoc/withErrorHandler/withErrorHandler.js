import React from 'react';

import Modal from '../../components/UI/Modal/Modal';
import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';
import Aux from '../_Aux/_Aux';

const withErrorHandler = (WrappedComponent) => {
    return (props) => {
        return (
            <Aux>
                <Modal>
                    <ErrorMessage />
                </Modal>
                <WrappedComponent {...props} />
            </Aux>
        )
    }
};

export default withErrorHandler;