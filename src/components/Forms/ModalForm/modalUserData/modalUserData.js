export const modalUserData = {
    phone: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Ваш телефон'
        },
        value: '',
        validation: {
            required: true,
            isPhone: true,
        },
        valid: false,
        touched: false,
        label: 'Ваш телефон'
    },
    name: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Ваше имя'
        },
        value: '',
        validation: {
            required: true,
            isUserName: true
        },
        valid: false,
        touched: false,
        label: 'Ваше имя'
    }
}