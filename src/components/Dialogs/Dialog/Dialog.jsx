import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css"

function DialogItem(props) {
    return (
        <div className={s.dialogItem}>
            <NavLink to={props.id} className={({ isActive }) => (isActive ? s.active : "")}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;