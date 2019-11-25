const initialState = {
    errors: null
};

export default function registrationReducer(state = initialState, action){
    switch (action.type){
        case 'REG_USER':
            return {
                errors: action.errors
            };
        default:
            return state;
    }
}