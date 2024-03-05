import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {setUserProfileActionCreator} from "../../redux/profile-reducer";
import {usersAPI} from "../../API/api";


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}


class ProfileContainer extends React.Component {

    componentDidMount() {
        let profileId = this.props.router.params.profileId;
        if (!profileId) {
            profileId = 10
        }
        usersAPI.getUserProfile(profileId)
            .then(data => {
                this.props.setUserProfileActionCreator(data)
            })
    }

    render() {
        return (
            <div>
                <div>
                    <Profile
                        {...this.props}
                        profile={this.props.profile}
                    />
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({profile: state.profilePage.profile})
export default connect(mapStateToProps, {setUserProfileActionCreator})(withRouter(ProfileContainer))