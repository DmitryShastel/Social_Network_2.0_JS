const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


let initialState = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://2.bp.blogspot.com/-w1KcztzMZTQ/VnXQHtY39GI/AAAAAAAAYQM/iB_PhFgDW9Y/s1600/bane.jpg',
        //     followed: true,
        //     fullName: 'Dima',
        //     status: 'I am the boss',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://image.stern.de/31693958/t/O6/v6/w1440/r1.7778/-/star-wars-schurke-was-wurde-aus-darth-maul.jpg',
        //     followed: false,
        //     fullName: 'Vasa',
        //     status: 'I am the boss too',
        //     location: {city: 'Moscow', country: 'Russia'}
        // }
    ]
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
            //return {...state, users: [...state.users, ...action.users]}
            return {...state, users: [ ...action.users]}
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