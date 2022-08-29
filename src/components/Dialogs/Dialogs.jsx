import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css"

function DialogItem(props) {
    return (
        <div>
            <NavLink to={props.id}>
                {props.name}
            </NavLink>
        </div>
    )
}

function MessageItem(props) {
    return <div id={props.id}>
        {props.msg}
    </div>
}

function Dialogs() {
    return (
        <div className={s.dialogsComponent}>
            <div className={s.dialogsTitle}>
                <h2>Dialogs</h2>
            </div>
            <div className={s.dialogs}>
                <DialogItem name="Nariman" id="1"></DialogItem>
                <DialogItem name="Linkoln" id="2"></DialogItem>
                <DialogItem name="Abdullah" id="3"></DialogItem>
            </div>
            <div className={s.messages}>
                <MessageItem msg="Hello!" id="1"></MessageItem>
                <MessageItem msg="How are you?" id="2"></MessageItem>
                <MessageItem msg="Wow!!!" id="3"></MessageItem>
            </div>
        </div>
    )
}

export default Dialogs;