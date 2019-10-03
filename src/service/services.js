import { moduleService } from "./module-service"
import { API } from "./API"

export const Service = {
    register: async(data) => {
        let response = await moduleService.post(API.REGISTER, data);
        console.log({response});
        if(response.status === 200) {
            return {
                data: response.data
            }
        } else {
            return {
                error: true,
                message: response.error.message
            }
        }
    },
    login: async (data) => {
        let response = await moduleService.postWithoutToken(API.LOGIN, data);
        if (response.status === 200) {
            return {
                data: response.data
            }
        } else {
            return {
                error: true,
                message: response.error.message
            }
        }
    }
}