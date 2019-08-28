export const breadCrumbsData = (() => {
    return {
        servicesCrumb: [
            {
                crumbName:'Главная',
                crumbHref: '/',
                linkType: 'prev'},
            {
                crumbName:'Услуги',
                crumbHref: '/services',
                linkType: 'current'
            }
        ],
        portfolioCrumb: [
            {
                crumbName:'Главная',
                crumbHref: '/',
                linkType: 'prev'},
            {
                crumbName:'Портфолио',
                crumbHref: '/portfolio',
                linkType: 'current'
            }
        ],
        contactsCrumb: [
            {
                crumbName:'Главная',
                crumbHref: '/',
                linkType: 'prev'},
            {
                crumbName:'Контакты',
                crumbHref: '/contacts',
                linkType: 'current'
            }
        ],
        advConstructorCrumb: [
            {
                crumbName:'Главная',
                crumbHref: '/',
                linkType: 'prev'},
            {
                crumbName:'Конструктор вывесок',
                crumbHref: '/constructor',
                linkType: 'current'
            }
        ]
    }
})();