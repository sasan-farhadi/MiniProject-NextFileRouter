import api from '../configs/api'
import { getCookie } from '../utils/cookie'

const register = data => api.post("auth/register", data)

const login = async (username, password) => {
    try {
        const response = await api.post("auth/login", { username, password })
        return { response }
    } catch (error) {
        return { error }
    }
}

getCookie("token")

export { register, login }