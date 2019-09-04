export const updateObject = (oldObject, updatedProperties) => {
    return {
      ...oldObject,
      ...updatedProperties
    };
  };

  export const checkValidity = ( value, rules ) => {
    let isValid = true;
    if ( !rules ) {
        return true;
    }
  
    if ( rules.required ) {
        isValid = value.trim() !== '' && isValid;
    }
  
    if ( rules.minLength ) {
        isValid = value.length >= rules.minLength && isValid
    }
  
    if ( rules.maxLength ) {
        isValid = value.length <= rules.maxLength && isValid
    }
    
    if (rules.isPhone) {
        const pattern = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/;
        isValid = pattern.test( value ) && isValid
    }

    if (rules.isUserName) {
        const pattern = /^[a-zA-Z0-9а-яА-Я ]+$/;
        isValid = pattern.test( value ) && isValid
    }
  
    if ( rules.isEmail ) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test( value ) && isValid
    }
  
    if ( rules.isNumeric ) {
        const pattern = /^\d+$/;
        isValid = pattern.test( value ) && isValid
    }
  
    return isValid;
  }

  export const userUseApple = () => {
    const userBrowserInfo = navigator.userAgent.toString();
    const userHaveMac = userBrowserInfo.indexOf('Macintosh');
    const userHaveIphone = userBrowserInfo.indexOf('iPhone');
    return userHaveMac > 0 || userHaveIphone > 0 ? true : false;
}