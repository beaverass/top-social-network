import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {compose} from "redux";
import {withRouter} from "../../hoc/WithRouter";
import {Navigate} from "react-router-dom";


class ProfileContainer extends React.Component {

    refreshProfile () {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }

        this.props.getUserProfile(userId);

        this.props.getUserStatus(userId);
    }


    componentDidMount() {
      this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.router.params.userId !== prevProps.router.params.userId){
            this.refreshProfile();
        }
    }

    render() {
        if(!this.props.authorizedUserId && !this.props.router.params.userId){
            return <Navigate replace to='/login'/>;
        }

        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                isOwner={!this.props.router.params.userId}
                savePhoto={this.props.savePhoto}
                saveProfile={this.props.saveProfile}
                errorMessages={this.props.errorMessages}
            />
        );

    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    errorMessages: state.profilePage.errorMessages
});


export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus, savePhoto, saveProfile}),
    // withAuthRedirect,
    withRouter
)(ProfileContainer);

