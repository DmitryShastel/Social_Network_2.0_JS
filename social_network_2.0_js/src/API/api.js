import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '9f9da7ee-2def-4ec9-bde3-f37a343d34bd'
    },
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(res => res.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(res => res.data)
    },
    unFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(res => res.data)
    },
    authMe() {
        return instance.get(`auth/me`)
            .then(res => res.data)
    },
    getUserProfile(profileId) {
        return instance.get(`profile/` + profileId).then(res => res.data)
    },
}







