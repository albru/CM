import React from 'react';
import FeaturesItem from './FeaturesItem/FeaturesItem';

const featuresItems = props => {
    const featuresData = [
        {
            desc: 'Изготовление наружной рекламы происходит на нашем собственном производстве. У нас присутствует весь парк необходимого оборудования.',
            imgSrc: 'imgSrc',
            imgAlt: 'imgAlt'
        },
        {
            desc: 'Изготовление наружной рекламы происходит на нашем собственном производстве. У нас присутствует весь парк необходимого оборудования.',
            imgSrc: 'imgSrc2',
            imgAlt: 'imgAlt2'
        },
        {
            desc: 'Изготовление наружной рекламы происходит на нашем собственном производстве. У нас присутствует весь парк необходимого оборудования.',
            imgSrc: 'imgSrc3',
            imgAlt: 'imgAlt3'
        },
        {
            desc: 'Изготовление наружной рекламы происходит на нашем собственном производстве. У нас присутствует весь парк необходимого оборудования.',
            imgSrc: 'imgSrc4',
            imgAlt: 'imgAlt4'
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
        <ul>
            {featuresList}
        </ul>
    )
};

export default featuresItems;