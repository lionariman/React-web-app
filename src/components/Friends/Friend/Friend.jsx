import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Friend.module.css";

function Friend(props) {
    return (
        <div className={s.friendItem}>
            <NavLink to={props.id} className={({isActive}) => (isActive ? s.active : '')}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default Friend;