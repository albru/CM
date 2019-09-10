export const orderInputData = (() => {
    return {
        phone: {
            elementType: 'input',
            elementConfig: {
                type: 'select'
            },
            options: ['sss', 'ddd'],
            value: '',
            validation: {
                required: false,
                isPhone: true,
                
            },
            valid: false,
            touched: false
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
                minLength: 3,
                isUserName: true
            },
            valid: false,
            touched: false
        }
    }
});

export const modalInputData = (() => {
    return {
        phone: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Ваш телефон'
            },
            value: '',
            validation: {
                required: false,
                isPhone: true,
                
            },
            valid: false,
            touched: false
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
                minLength: 3,
                isUserName: true
            },
            valid: false,
            touched: false
        }
    }
});

