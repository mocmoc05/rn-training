export function changeName() {
    return {
        type: 'CHANGE_NAME',
        payload: 'React native'
    }
}

export function changeAge(age) {
    return {
        type: 'CHANGE_AGE',
        payload: age
    }
}