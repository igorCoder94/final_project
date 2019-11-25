const initialState = [];

export default function servicesReducer(state = initialState, action) {
    switch(action.type){
        case 'ADD_SERVICES':
            return [
                ...state,
                ...action.payload
            ];
        default:
            return state;
    }
}