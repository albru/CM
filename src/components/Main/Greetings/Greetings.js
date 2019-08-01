import React from 'react';

import Aux from '../../../hoc/Aux/Aux.js';
import Button from '../../UI/Button/Button';

const greetings = props => {
    return (
        <Aux>
            <h1>Наружные и интерьерные вывески, рекламные конструкции от производителя</h1>
            <p>Мы используем светодиоды повышенного срока службы с 3-летней гарантией от завода-изготовителя</p>
            <Button btnType='ContactButton'>Заказать сейчас</Button>
        </Aux>
        
    )
};

export default greetings;