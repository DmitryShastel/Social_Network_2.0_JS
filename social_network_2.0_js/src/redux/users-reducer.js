const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


let initialState = {
    users: []
}

export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                   return action.id === u.id ? {...u, followed: true} : u
                })
            }

        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    return action.id === u.id ? {...u, followed: false} : u
                })
            }
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}