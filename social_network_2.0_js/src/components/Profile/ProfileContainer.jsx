import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom"
import {setUserProfileActionCreator} from "../../redux/profile-reducer";


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
            profileId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + profileId)
            .then(res => {
                this.props.setUserProfileActionCreator(res.data)
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