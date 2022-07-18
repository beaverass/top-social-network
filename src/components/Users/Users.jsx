import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {


    return (
        <div>

            <Paginator totalItemsCount={props.totalUsersCount}
                       currentPage={props.currentPage}
                       pageSize={props.pageSize}
                       onPageChanged={props.onPageChanged}/>

            {
                props.users.map(u => <div key={u.id}>
                    <User u={u}/>

                </div>)
            }
        </div>
    );
};

export default Users;