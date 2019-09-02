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

  export const checkUserBrowserForRightImages = (item) => {
    const userBrowserInfo = navigator.userAgent.toString();
    const userHaveMac = userBrowserInfo.indexOf('Macintosh');
    const userHaveIphone = userBrowserInfo.indexOf('iPhone');
    if (item) {
        return userHaveMac > 0 || userHaveIphone > 0 ? item.imgSrcJpg : item.imgSrc;
    }
    return userHaveMac > 0 || userHaveIphone > 0 ? true : false;
}