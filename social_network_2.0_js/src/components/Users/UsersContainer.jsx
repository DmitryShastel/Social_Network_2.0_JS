import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setCurrentPageAC, setTotalUserCountAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import axios from "axios";


class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.setTotalUserCount(res.data.totalCount)
            })

    }

    changedPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return <Users
            users={this.props.users}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            changedPage={this.changedPage}
        />
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (usersId) => {
            dispatch(followAC(usersId))
        },
        unfollow: (usersId) => {
            dispatch(unfollowAC(usersId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUserCount: (totalCount) => {
            dispatch(setTotalUserCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);