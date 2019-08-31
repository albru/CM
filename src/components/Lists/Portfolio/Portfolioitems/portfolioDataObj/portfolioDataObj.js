import severImg from '../../../../../assets/img/portfolio/sever.webp';
import cdsImg from '../../../../../assets/img/portfolio/cds.webp';
import dominaImg from '../../../../../assets/img/portfolio/domina_nove.webp';
import mapImg from '../../../../../assets/img/portfolio/karta.webp';
import laituriImg from '../../../../../assets/img/portfolio/laituri.webp';
import manlyImg from '../../../../../assets/img/portfolio/manly.webp';
import uptickImg from '../../../../../assets/img/portfolio/uptick.webp';
import viessmannImg from '../../../../../assets/img/portfolio/viessmann.webp';

import severImgJpg from '../../../../../assets/img/portfolio/sever.jpg';
import cdsImgJpg from '../../../../../assets/img/portfolio/cds.jpg';
import dominaImgJpg from '../../../../../assets/img/portfolio/domina_nove.jpg';
import mapImgJpg from '../../../../../assets/img/portfolio/karta.jpg';
import laituriImgJpg from '../../../../../assets/img/portfolio/laituri.jpg';
import manlyImgJpg from '../../../../../assets/img/portfolio/manly.jpg';
import uptickImgJpg from '../../../../../assets/img/portfolio/uptick.jpg';
import viessmannImgJpg from '../../../../../assets/img/portfolio/viessmann.jpg';

export const portfolioData = (() => {
    return {
        sever: {
            title: 'Аэролодки "Север"',
            imgSrc: severImg,
            imgSrcJpg: severImgJpg, 
            imgAlt: 'severImg',
            desc: 'Наружное оформление представительства'
        },
        worldMap: {
            title: 'Зеркальная карта мира',
            imgSrc: mapImg,
            imgSrcJpg: mapImgJpg, 
            imgAlt: 'mapImg',
            desc: 'С дистанционным управлением'
        },
        cdsCompany: {
            title: 'Оформление офисов компании "ЦДС"',
            imgSrc: cdsImg,
            imgSrcJpg: cdsImgJpg,
            imgAlt: 'cdsImg',
            desc: 'Объемные световые буквы'
        },
        manlypro: {
            title: 'MANLYPRO',
            imgSrc: manlyImg,
            imgSrcJpg: manlyImgJpg,
            imgAlt: 'manlyImg',
            desc: 'Внутреннее и наружнее оформление'
        },
        viessmann: {
            title: 'Viessmann',
            imgSrc: viessmannImg,
            imgSrcJpg: viessmannImgJpg,
            imgAlt: 'viessmannImg',
            desc: 'Выставочные конструкции'
        },
        uptick: {
            title: 'UPTICK',
            imgSrc: uptickImg,
            imgSrcJpg: uptickImgJpg,
            imgAlt: 'uptickImg',
            desc: 'Интерьерный логотип из неона'
        },
        domina_nove: {
            title: 'Domina & Nove',
            imgSrc: dominaImg,
            imgSrcJpg: dominaImgJpg,
            imgAlt: 'dominaImg',
            desc: 'Световые таблички для бара'
        },
        laituri: {
            title: 'Отель "Laituri"',
            imgSrc: laituriImg,
            imgSrcJpg: laituriImgJpg,
            imgAlt: 'laituriImg',
            desc: 'Комплексное оформление'
        }
    }
})();