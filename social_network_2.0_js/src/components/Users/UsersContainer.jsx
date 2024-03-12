import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {follow, getUsers, setCurrentPage, unfollow} from "../../redux/users-reducer";
import {Preloader} from "../Common/Preloader/Preloader";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    changedPage = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                changedPage={this.changedPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default WithAuthRedirect(connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers,
})(UsersContainer));