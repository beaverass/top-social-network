import React, {useEffect, useState} from 'react';
import classes from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);


    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.target.value);
    }

    return (

        <div style={{marginLeft: 10}}>
            {editMode

                ? <div>
                    <input onChange={onStatusChange}
                           onBlur={deactivateEditMode}
                           autoFocus={true}
                           type="text" value={status}/>
                </div>

                : <div className={classes.statusContainer}>
                    <span onDoubleClick={activateEditMode}>{props.status || "-----"}</span>
                </div>
            }
        </div>
    );
}


export default ProfileStatusWithHooks;