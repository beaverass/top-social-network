import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import profileImg from './../../../assets/images/images.png';
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const Ava = (props) => {
    return (
        <div className={classes.wrapperAvaBlock}>
            <div className={classes.wrapperImg}>
                <img src={props.profile.photos.large ? props.profile.photos.large : profileImg} className={classes.avaProfile} />
            </div>

        </div>
    );
}

const Description = (props) => {


    return (
        <div className={classes.descriptionBlock}>
            <div className={classes.name}>{props.profile.fullName}</div>

            <ProfileStatusWithHooks updateStatus={props.updateStatus} status={props.status}/>

            <div className={classes.besday}>About me: {props.profile.aboutMe}</div>
            <div className={classes.city}>Looking for a job: {props.profile.lookingForAJob ? 'Ищу работу': 'Уже работаю'}</div>
            <div className={classes.street}>Looking For a job description: {props.profile.lookingForAJobDescription}</div>
            <div className={classes.languages}>languages: eng, russian</div>
            <div className={classes.sex}>contacts: </div>
            <div className={classes.phoneNumber}>+7-920-589-89-61</div>
        </div>
    )
}

const Statistic = () => {
    return (<div className={classes.statistic}>
        <div className={classes.friends}>
            <div className={classes.friendsItem}>61</div>
            <div>friends</div>
        </div>

        <div className={classes.subs}>
            <div className={classes.subsItem}>153</div>
            <div >subs</div>
        </div>

        <div className={classes.tracks}>
            <div className={classes.tracksItem}>233</div>
            <div>tracks</div>
        </div>

        <div className={classes.videos}>
            <div className={classes.videosItem}>20</div>
            <div >videos</div>
        </div>

        <div className={classes.groups}>
            <div className={classes.groupsItem}>45</div>
            <div>groups</div>
        </div>

    </div>);
}

const ProfileInfo = (props) => {

    if (!props.profile){
        return <Preloader/>
    }

    return (
        <div className={classes.wrapper}>

           <Ava profile={props.profile}/>

            <div>
                <Description profile={props.profile} updateStatus={props.updateStatus} status={props.status}/>
                <Statistic/>
            </div>

        </div>
    );
};

export default ProfileInfo;