import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthMeUserData, setAuthUserData} from "../../redux/auth-reducer";
import {authMe, usersAPI} from "../../API/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthMeUserData()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
export default connect(mapStateToProps, {getAuthMeUserData})(HeaderContainer);

