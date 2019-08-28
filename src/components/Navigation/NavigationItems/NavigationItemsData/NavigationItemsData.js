export const navigationItemsData = (() => {
    return {
        services: {
            name: 'Услуги', 
            route: "/services"
        },
        portfolio: {
            name: "Портфолио", 
            route: "/portfolio"
        },
        advConstructor: {
            name: "Конструктор вывесок", 
            route: "/constructor", 
            disabled: true
        },
        contacts: {
            name: "Контакты", 
            route: "/contacts"
        }
    }
})();