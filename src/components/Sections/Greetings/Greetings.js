import React from 'react';
import Button from '../../UI/Button/Button';
import classes from './Greetings.css';
import BgImage from './BgImage/BgImage';

const greetings = props => {
    return (
        <section className={classes.Greetings}>
            <h1>Наружные и интерьерные вывески, рекламные конструкции от производителя</h1>
            <p>Мы используем светодиоды повышенного срока службы с 3-летней гарантией от завода-изготовителя</p>
            <Button btnType='MainButton'>Заказать сейчас</Button>
            <BgImage></BgImage>
        </section>
        
    )
};

export default greetings;