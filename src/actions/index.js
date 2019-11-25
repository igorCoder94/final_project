
export const addServicesAction = (data) => {
    return {
         type: 'ADD_SERVICES', payload: data
    }
};

export const loginAction = (name,id) => {
    return {
        type: 'LOG_IN', name: name, id: id
    }
};

export const logoffAction = () => {
  return {
      type: 'LOG_OFF'
  }
};

export const regUserAction = (errors) => {
    return {
        type: 'REG_USER', errors: errors
    }
};



