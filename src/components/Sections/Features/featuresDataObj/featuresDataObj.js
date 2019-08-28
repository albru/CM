import guaranteeImg from '../../../../assets/img/features/guarantee.jpg';
import contractImg from '../../../../assets/img/features/contract.jpg';
import rulesImg from '../../../../assets/img/features/rules.jpg';
import deadlineImg from '../../../../assets/img/features/deadline.jpg';


export const featuresData = (() => {
    return [
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
        }
    ]
})();