import React from "react";
import s from "./Users.module.css";
import User from "./User/User";

function Users(props) {
    return (
        <div className={s.usersComponent}>
            <div className={s.usersTitleBlock}>
                <h2>Users</h2>
            </div>
            <div className={s.usersListBlock}>
                {props.usersData.map((item, i) =>
                    <User
                        key={i}
                        id={item.id}
                        followed={item.followed}
                        fullname={item.fullname}
                        status={item.status}
                        location={item.location}
                        onFollowClick={props.onFollowClick}>
                    </User>)}
            </div>
        </div>
    )
}

export default Users;