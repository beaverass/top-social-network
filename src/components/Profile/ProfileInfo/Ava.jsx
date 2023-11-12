import classes from "./ProfileInfo.module.css";
import profileImg from "../../../assets/images/images.png";
import c from "./Ava.module.css";
import React from "react";

const Ava = (props) => {


    const onMainPhotoSelected = (e) => {

        if( e.target.files){
            props.savePhoto(e.target.files[0])
        }

    }
    return (
        <div className={classes.wrapperAvaBlock}>
            <div className={classes.wrapperImg}>
                <img src={props.profile.photos.large ? props.profile.photos.large : profileImg}
                     className={classes.avaProfile}/>
            </div>
            {props.isOwner &&
                <div>
                <div className={c.wrapperInputFile}>
                    <label className={c.customFileUpload}>
                        <input type="file" onChange={onMainPhotoSelected}/>
                        Select avatar...
                    </label>

                </div>
                    <div className={c.wrapperEditBtn}>
                        <button className={c.editBtn} onClick={() => props.setEditMode(true)}>Edit Profile</button>
                    </div>
                </div>
            }
        </div>
    );

}
export default Ava;