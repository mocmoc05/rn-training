import { AsyncStorage } from 'react-native';
import { CONST } from '../config/const';
export const moduleService = {
    get: async(url) => {
        let token = AsyncStorage.getItem(CONST.STORAGE.TOKEN)
        return fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'Application/json',
                'Content-type': 'Application/json',
                Authorization: 'Bearer ' + token
            }
        })
        .then(res => res.json())
        .catch(err => console.log(err))
    },

    getWithoutToken: async (url) => {
        return fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'Application/json',
                'Content-type': 'Application/json'
            }
        })
            .then(res => res.json())
            .catch(err => console.log(err))
    },

    post: async (url, data) => {
        let token = AsyncStorage.getItem(CONST.STORAGE.TOKEN)
        return fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'Application/json',
                'Content-type': 'Application/json',
                Authorization: 'Bearer ' + token
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .catch(err => console.log(err))
    },

    postWithoutToken: async (url, data) => {
        return fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'Application/json',
                'Content-type': 'Application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .catch(err => console.log(err))
    }
}