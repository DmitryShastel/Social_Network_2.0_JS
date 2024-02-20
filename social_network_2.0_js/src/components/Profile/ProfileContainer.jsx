import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileActionCreator} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

const mapStateToProps = (state) => ({ profile: state.profilePage.profile})

export default connect(mapStateToProps, {setUserProfileActionCreator})(ProfileContainer)