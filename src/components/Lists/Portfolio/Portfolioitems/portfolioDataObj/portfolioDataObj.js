import severImg from '../../../../../assets/img/portfolio/sever.webp';
import cdsImg from '../../../../../assets/img/portfolio/cds.webp';
import dominaImg from '../../../../../assets/img/portfolio/domina_nove.webp';
import mapImg from '../../../../../assets/img/portfolio/karta.webp';
import laituriImg from '../../../../../assets/img/portfolio/laituri.webp';
import manlyImg from '../../../../../assets/img/portfolio/manly.webp';
import uptickImg from '../../../../../assets/img/portfolio/uptick.webp';
import viessmannImg from '../../../../../assets/img/portfolio/viessmann.webp';


let s;

(() => {

    s = navigator.userAgent.toString();
    console.log(s,'browser')
})()

export const portfolioData = (() => {
    return {
        sever: {
            title: 'Аэролодки "Север"',
            imgSrc: severImg,
            imgAlt: 'severImg',
            desc: 'Наружное оформление представительства'
        },
        worldMap: {
            title: 'Зеркальная карта мира',
            imgSrc: mapImg,
            imgAlt: 'mapImg',
            desc: 'С дистанционным управлением'
        },
        cdsCompany: {
            title: 'Оформление офисов компании "ЦДС"',
            imgSrc: cdsImg,
            imgAlt: 'cdsImg',
            desc: 'Объемные световые буквы'
        },
        manlypro: {
            title: 'MANLYPRO',
            imgSrc: manlyImg,
            imgAlt: 'manlyImg',
            desc: 'Внутреннее и наружнее оформление'
        },
        viessmann: {
            title: 'Viessmann',
            imgSrc: viessmannImg,
            imgAlt: 'viessmannImg',
            desc: 'Выставочные конструкции'
        },
        uptick: {
            title: 'UPTICK',
            imgSrc: uptickImg,
            imgAlt: 'uptickImg',
            desc: 'Интерьерный логотип из неона'
        },
        domina_nove: {
            title: 'Domina & Nove',
            imgSrc: dominaImg,
            imgAlt: 'dominaImg',
            desc: 'Световые таблички для бара'
        },
        laituri: {
            title: 'Отель "Laituri"',
            imgSrc: laituriImg,
            imgAlt: 'laituriImg',
            desc: 'Комплексное оформление'
        }
    }
})();