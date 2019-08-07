import React from 'react';
import outdoorAdvImg from '../../../../assets/img/services/outdoorAdvImg.png';
import interiorAdvImg from '../../../../assets/img/services/interiorAdvImg.png';
import advServicesImg from '../../../../assets/img/services/advServicesImg.png';
import ServicesItem from './ServicesItem/ServicesItem';
import classes from './ServicesItems.css';



const servicesItems = (props) => {
    const servicesData = [
        {
            title: 'Наружная реклама',
            href: '/11',
            imgSrc: outdoorAdvImg,
            imgAlt: 'outdoorAdvImg',
            desc: 'Фасадные вывески • Объёмные буквы • Согласование вывесок • Крышные установки • Козырёк над крыльцом • Летние кафе • Рекламные стелы • Бегущие строки • Входная группа • Панель-кронштейны • Световые короба • Изготовление металлоконструкций'
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
    ]
    const servicesList = servicesData.map((item, index) => {
        return (
            <ServicesItem 
                key={index}
                title={item.title}
                href={item.href}
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
                desc={item.desc} />
        )
    })

    return (
        <ul className={classes.ServicesList}>
            {servicesList}
        </ul>
    )
};

export default servicesItems;