const default_state = {
    username: 'Bim',
    age: 18
}

export default (state = default_state, action) => {
    switch (action.type) {
        case 'UPDATE_NAME':
            return{
                ...state,
                name: action.payload
            }
        default:
            return state;
    }
}