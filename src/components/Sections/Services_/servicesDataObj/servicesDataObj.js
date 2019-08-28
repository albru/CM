import outdoorAdvImg from '../../../../assets/img/services/outdoorAdvImg.png';
import interiorAdvImg from '../../../../assets/img/services/interiorAdvImg.png';
import advServicesImg from '../../../../assets/img/services/advServicesImg.png';

export const servicesData = (() => {
    return [
        {
            title: 'Наружная реклама',
            href: '/11',
            imgSrc: outdoorAdvImg,
            imgAlt: 'outdoorAdvImg',
            desc: 'Фасадные вывески • Объёмные буквы • Согласование вывесок • Крышные установки • Козырёк над крыльцом • Летние кафе • Рекламные стелы • Бегущие строки • Входная группа • Панель-кронштейны • Световые короба'
        },
        {
            title: 'Интерьерная реклама',
            href: '/22',
            imgSrc: interiorAdvImg,
            imgAlt: 'interiorAdvImg',
            desc: 'Зоны ресепшн • Кассовые зоны • Неоновые вывески • Световые панели • Выставочные стенды • Изготовление табличек • Информационные стенды • Изделия из дерева'
        },
        {
            title: 'Рекламные услуги',
            href: '/33',
            imgSrc: advServicesImg,
            imgAlt: 'advServicesImg',
            desc: 'Дизайн рекламы • Нейминг • Широкоформатная печать • Плоттерная резка • Полиграфия • Ремонт вывесок • Промышленный альпинизм'
        }
    ];
})();

export const servicesListData = (() => {
    return [
        {
            name: 'Зоны ресепшн',
            href: '',
        },
        {
            name: 'Выставочные стенды',
            href: '',
        },
        { 
            name: 'Неоновые вывески',
            href: '',
        },
        {
            name: 'Световые панели',
            href: '',
        },
        {
            name: 'Изготовление табличек',
            href: '',
        },
        {
            name: 'Информационные стенды',
            href: '',
        }
    ]
})();

