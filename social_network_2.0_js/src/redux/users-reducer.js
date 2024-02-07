const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1
}

export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                //users: [...state.users]
                users: state.users.map(u => {
                    if (u.id === action.usersId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                //users: [...state.users]
                users: state.users.map(u => {
                    if (u.id === action.usersId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            // return {...state, users: [...state.users, ...action.users]}
            return {...state, users: [...action.users]}
        }

        default:
            return state;
    }
}

export const followAC = (usersId) => {
    return {
        type: FOLLOW,
        usersId
    }
}
export const unfollowAC = (usersId) => {
    return {
        type: UNFOLLOW,
        usersId
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}