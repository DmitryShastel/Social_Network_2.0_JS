import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {getUserProfile} from "../../redux/profile-reducer";


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
        let userId = this.props.router.params.profileId;
        if (!userId) {
            userId = 10
        }
        this.props.getUserProfile(userId)
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
export default connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer))