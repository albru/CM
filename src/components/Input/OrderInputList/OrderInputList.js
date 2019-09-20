import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/_Aux/_Aux';

import { useInputFabric } from '../../../hooks/hooks';

const OrderInputList = props => {

    const { list } = useInputFabric(props.userData, props.inputChangeHandler);
    
    return (
        <Aux>
            {list}
        </Aux>
    )
}

OrderInputList.propTypes = {
    userData: PropTypes.array,
    inputChangeHandler: PropTypes.func
}

export default OrderInputList;