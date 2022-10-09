import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css"

function Dialog(props) {
    return (
        <div className={s.dialogItem}>
            <NavLink
                to={(typeof props.id === 'number' ? props.id.toString() : props.id)}
                className={({ isActive }) => (isActive ? s.active : "")}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default Dialog;