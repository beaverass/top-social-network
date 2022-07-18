import React from 'react';
import {useSelector} from "react-redux";
import User from "../Users/User";
import {selectFriends} from "../../redux/friends-selectors";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


const Friends = (props) => {

    const friends = useSelector(selectFriends);


    return (
        <div>
            <h1 style={{textAlign: "center"}}>Friends</h1>

            {friends === undefined || friends.length === 0
                ?<h2 style={{textAlign: "center"}}>You don't have friends</h2>
                : friends.map(f =>
                <User u={f}/>)}

        </div>
    );
};


export default withAuthRedirect(Friends);