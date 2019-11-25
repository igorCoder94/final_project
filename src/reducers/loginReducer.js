const initialState = {
    logged: false,
    name: null,
    id: null
};

export default function loginReducer(state = initialState, action){
    switch (action.type){
        case 'LOG_IN':
            return {
                logged: true,
                name: action.name,
                id: action.id
            };
        case 'LOG_OFF':
            return {
                logged: false,
                name: null,
                id: null
            };
        default:
            return state;
    }
}