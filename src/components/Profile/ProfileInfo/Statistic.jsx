import classes from "./ProfileInfo.module.css";
import React from "react";

const Statistic = () => {
    return (<div className={classes.statistic}>
        <div className={classes.friends}>
            <div className={classes.friendsItem}>61</div>
            <div>friends</div>
        </div>

        <div className={classes.subs}>
            <div className={classes.subsItem}>153</div>
            <div>subs</div>
        </div>

        <div className={classes.tracks}>
            <div className={classes.tracksItem}>233</div>
            <div>tracks</div>
        </div>

        <div className={classes.videos}>
            <div className={classes.videosItem}>20</div>
            <div>videos</div>
        </div>

        <div className={classes.groups}>
            <div className={classes.groupsItem}>45</div>
            <div>groups</div>
        </div>

    </div>);
}
export default Statistic;