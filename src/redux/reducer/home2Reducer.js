const DEFAUT_STATE = {
    device: 'iPhone 7',
    brand: 'iPhone'
}

export default (state = DEFAUT_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}