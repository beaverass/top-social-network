import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateStatus} from "../../redux/profile-reducer";
import {compose} from "redux";
import {withRouter} from "../../hoc/WithRouter";
import {Navigate} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }

        this.props.getUserProfile(userId);

        this.props.getUserStatus(userId);


    }

    render() {
        if(!this.props.authorizedUserId && !this.props.router.params.userId){
            return <Navigate replace to='/login'/>;
        }

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );

    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});


export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus}),
    // withAuthRedirect,
    withRouter
)(ProfileContainer);

