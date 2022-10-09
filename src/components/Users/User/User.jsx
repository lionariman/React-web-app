import React from "react";
// import { NavLink } from "react-router-dom";
import s from "./User.module.css";

function User(props) {
    return (
        <div className={s.userItem}>
            {/* <NavLink to={props.id} className={({isActive}) => (isActive ? s.active : '')}> */}
            {/* </NavLink> */}
            <div>
                {props.fullname}
                <div className={s.followed}>
                    {(props.followed ? 'followed' : 'unfollowed')}
                </div>
                <button
                    className={s.followButton}
                    onClick={() => props.onFollowClick(props.id)}>
                    {(props.followed ? 'unfollow' : 'follow')}
                </button>
            </div>
            <div>
                {props.status}
            </div>
            {/* <div>
                {props.location.country}
                {props.location.city}
            </div> */}
        </div>
    )
}

export default User;