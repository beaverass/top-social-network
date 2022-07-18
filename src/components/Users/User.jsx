import React from 'react';
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/images.png";
import classes from "./users.module.css";
import {connect, useSelector} from "react-redux";
import {follow, unfollow} from "../../redux/users-reducer";
import {getFollowingInProgress} from "../../redux/users-selectors";

const User = (props) => {

    const followingInProgress = useSelector(getFollowingInProgress);

    return (
        <div>
            <span>
                        <div>
                            <NavLink to={'/profile/' + props.u.id}>
                                <img src={props.u.photos.small != null ? props.u.photos.small : userPhoto}
                                     className={classes.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {
                                props.u.followed
                                    ? <button disabled={followingInProgress.some(id => id === props.u.id)}
                                              onClick={() => {

                                                  props.unfollow(props.u.id);

                                              }}
                                    >Unfollow</button>

                                    : <button disabled={followingInProgress.some(id => id === props.u.id)}
                                              onClick={() => {

                                                  props.follow(props.u.id);

                                              }}

                                    >Follow</button>
                            }

                        </div>
                    </span>
            <span>
                        <span>
                            <div>{props.u.name}</div>
                            <div>{props.u.status}</div>
                        </span>

                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
        </div>
    );
};


export default connect(null, {
    unfollow,
    follow
})(User);
