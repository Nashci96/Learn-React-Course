import api from "../configs/api"

export const login = (data) => {
    return api.post('/auth/login',data)
}