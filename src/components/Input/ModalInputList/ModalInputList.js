import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/_Aux/_Aux';

import { useInputFabric } from '../../../hooks/hooks';

const ModalInputList = props => {
    
    const { list } = useInputFabric(props.userData, props.inputChangeHandler)
    
    return (
        <Aux>
            {list}
        </Aux>
    )
};

ModalInputList.propTypes = {
    userData: PropTypes.array
}


export default ModalInputList;