const DEFAUT_STATE = {
    name: 'Hoan',
    age: 25
}

export default (state = DEFAUT_STATE, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return{
                ...state,
                name: action.payload
            }
        case 'CHANGE_AGE':
            return{
                ...state,
                age: action.payload
            }
        default:
            return state;
    }
}