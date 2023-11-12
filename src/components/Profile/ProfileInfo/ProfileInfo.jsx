import React, {useState} from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import Statistic from "./Statistic";
import Contact from "./Contact";
import Ava from "./Ava";
import ProfileDescriptionForm from "./ProfileDescriptionForm";

const Description = (props) => {
    let [showMore, setShowMore] = useState(false);


    return (
        <div className={classes.descriptionBlock}>

            <div className={classes.name}>{props.profile.fullName}</div>

            <ProfileStatusWithHooks updateStatus={props.updateStatus} status={props.status}/>

            <div className={classes.besday}><b>About me:</b> {props.profile.aboutMe}</div>

            <div className={classes.descriptionItem}><b>Looking for a
                job:</b> {props.profile.lookingForAJob ? 'Ищу работу' : 'Уже работаю'}</div>

            <div className={classes.descriptionItem}><b>My professional
                skills:</b> {props.profile.lookingForAJobDescription}</div>

            {showMore ?
                <div >
                    <button className={classes.showMoreBtn} onClick={() => setShowMore(false)}>Hide all info</button>
                    <div className={classes.descriptionItem}>
                        <div><b>Contacts:</b></div>
                        {Object.keys(props.profile.contacts).map(key => {
                            return <Contact contactTitle={key} contactValue={props.profile.contacts[key]}/>
                        })}
                    </div>
                </div>
            : <button className={classes.showMoreBtn} onClick={() => setShowMore(true)}>Show all info</button>}


        </div>
    )
}


const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }
    const onSubmit = async (data) => {
        await props.saveProfile(data);

        setEditMode(false);

    }


    return (
        <div className={classes.wrapper}>

            <Ava savePhoto={props.savePhoto} profile={props.profile} isOwner={props.isOwner} setEditMode={setEditMode}/>

            <div>
                {editMode
                    ? <ProfileDescriptionForm errorMessages={props.errorMessages} profile={props.profile} onSubmit={onSubmit}/>
                    : <Description profile={props.profile} updateStatus={props.updateStatus} status={props.status}/>}
                <Statistic/>
            </div>

        </div>
    );
};

export default ProfileInfo;


