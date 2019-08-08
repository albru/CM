import React from 'react';
import FeaturesItem from './FeaturesItem/FeaturesItem';
import guaranteeImg from '../../../../assets/img/features/guarantee.jpg';
import contractImg from '../../../../assets/img/features/contract.jpg';
import rulesImg from '../../../../assets/img/features/rules.jpg';
import deadlineImg from '../../../../assets/img/features/deadline.jpg';
import classes from './FeaturesItems.css';

const featuresItems = props => {
    const featuresData = [
        {
            title: 'Гарантия',
            desc: 'До 3 лет гарантии на все выполненные работы и произведенные изделия',
            imgSrc: guaranteeImg,
            imgAlt: 'guaranteeImg'
        },
        {
            title: 'Договор',
            desc: 'Полноценный договор, защищающий интересы клиента',
            imgSrc: contractImg,
            imgAlt: 'contractImg'
        },
        {
            title: 'Всё по правилам',
            desc: 'Соблюдения правил размещения вывесок и рекламных конструкций',
            imgSrc: rulesImg,
            imgAlt: 'rulesImg'
        },
        {
            title: 'Соблюдаем сроки',
            desc: 'Старт изготовления в день обращения',
            imgSrc: deadlineImg,
            imgAlt: 'deadlineImg'
        },
    ];

    const featuresList = featuresData.map((item,index) => {
        return (
            <FeaturesItem 
                key={index}
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
                desc={item.desc}
                />
        )
    })
    return (
        <ul className={classes.FeaturesItems}>
            {featuresList}
        </ul>
    )
};

export default featuresItems;