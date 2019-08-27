import React from 'react';
import Aux from '../../../hoc/_Aux/_Aux';
import Button from '../../UI/Button/Button';

const callForm = props => {
    return (
        <Aux>
            <form>
                <input type="text"></input>
                <input type="number"></input>
                <Button btnType="MainButton">CallMe</Button>
            </form>
        </Aux>
    )
}

export default callForm;