import React from 'react';
import classes from './Greetings.css';


const greetings = props => {
    return (
        <section className={classes.Greetings}>
            <h1>Наружные и интерьерные вывески, рекламные конструкции от производителя</h1>
            <p>Мы используем светодиоды повышенного срока службы с 3-летней гарантией от завода-изготовителя</p>
            {props.children}
        </section>
        
    )
};

export default greetings;