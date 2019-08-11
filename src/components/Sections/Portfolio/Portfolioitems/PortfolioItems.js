import React from 'react';

import classes from './PortfolioItems.css';
import PortfolioItem from './PortfolioItem/PortfolioItem';

import severImg from '../../../../assets/img/portfolio/sever.jpg';
import cdsImg from '../../../../assets/img/portfolio/cds.jpg';
import dominaImg from '../../../../assets/img/portfolio/domina&nove.jpg';
import kartaImg from '../../../../assets/img/portfolio/karta.jpg';
import laituriImg from '../../../../assets/img/portfolio/laituri.jpg';
import manlyImg from '../../../../assets/img/portfolio/manly.jpg';
import uptickImg from '../../../../assets/img/portfolio/uptick.jpg';
import viessmannImg from '../../../../assets/img/portfolio/viessmann.jpg';


const portfolioItems = props => {

    const portfolioData = [
        {
            title: 'Аэролодки "Север"',
            imgSrc: severImg,
            imgAlt: 'severImg',
            desc: 'Наружное оформление представительства'
        },
        {
            title: 'Зеркальная карта мира',
            imgSrc: kartaImg,
            imgAlt: 'kartaImg',
            desc: 'С дистанционным управлением'
        },
        {
            title: 'Оформление офисов компании "ЦДС"',
            imgSrc: cdsImg,
            imgAlt: 'cdsImg',
            desc: 'Объемные световые буквы'
        },
        {
            title: 'MANLYPRO',
            imgSrc: manlyImg,
            imgAlt: 'manlyImg',
            desc: 'Внутреннее и наружнее оформление'
        },
        {
            title: 'Viessmann',
            imgSrc: viessmannImg,
            imgAlt: 'viessmannImg',
            desc: 'Выставочные конструкции'
        },
        {
            title: 'UPTICK',
            imgSrc: uptickImg,
            imgAlt: 'uptickImg',
            desc: 'Интерьерный логотип из неона'
        },
        {
            title: 'Domina & Nove',
            imgSrc: dominaImg,
            imgAlt: 'dominaImg',
            desc: 'Световые таблички для бара'
        },
        {
            title: 'Отель "Laituri"',
            imgSrc: laituriImg,
            imgAlt: 'laituriImg',
            desc: 'Комплексное оформление'
        }
    ]

    const portfolioList = portfolioData.map((item, index) => {
        return (
            <PortfolioItem 
                key={index}
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
                title={item.title}
                desc={item.desc}
            />
        )
    })

    return (
        <ul className={classes.PortfolioItems}>
            {portfolioList}
        </ul>
    )
};

export default portfolioItems;