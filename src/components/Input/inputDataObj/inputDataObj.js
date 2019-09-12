export const inputData = (() => {
    const modalInputData = {
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
                    isUserName: true
                },
                valid: false,
                touched: false
            }
        }
    const orderInputData = {
            place: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'ТК Лето', displayValue: 'ТК Лето' },
                        { value: 'ТК Галерея', displayValue: 'ТК Галерея' },
                        { value: 'ТК Гулливер', displayValue: 'ТК Гулливер' }
                    ]
                },
                label: 'Место размещения',
                value: 'ТК Галерея',
                validation: {}
            },
            size: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: '25 дюймов', displayValue: '25 дюймов' },
                        { value: '34 дюйма', displayValue: '34 дюйма' },
                        { value: '39 дюйма', displayValue: '39 дюйма' },
                        { value: '31 дюйма', displayValue: '31 дюйма' },
                        { value: '42 дюйма', displayValue: '42 дюйма' }
                    ]
                },
                label: 'Диагональ панели',
                value: '34 дюйма',
                validation: {},
                valid: true
            },
            showTime: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'от 5 до 30 минут'
                },
                label: 'Длительность рекламы',
                value: '',
                validation: {},
                valid: true
            },
            comment: {
                elementType: 'textarea',
                elementConfig: {
                  rows: '10',
                  cols: '35',
                  placeholder: 'Укажите дополнительную информацию'
                },
                value: '',
                validation: {},
                valid: true
              },
        }
    return {orderInputData, modalInputData}
})();

