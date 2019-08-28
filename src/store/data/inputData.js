export const userDataObject = (() => {
    return {
        email: {
            elementType: 'input',
            elementConfig: {
              type: 'email',
              placeholder: 'Почта'
            },
            value: '',
            validation: {
              required: true,
              isEmail: true
            },
            valid: false,
            touched: false
          },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Пароль'
            },
            value: '',
            validation: {
                required: true,
                minLength: 6
            },
            valid: false,
            touched: false
        },
        phone: {
            elementType: 'input',
            elementConfig: {
                type: 'number',
                placeholder: 'Ваш телефон'
            },
            value: '',
            validation: {
                required: true,
                minLength: 11
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
                minLength: 3
            },
            valid: false,
            touched: false
            }
    }
});