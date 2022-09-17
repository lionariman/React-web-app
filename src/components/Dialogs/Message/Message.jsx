import React from "react";
import s from "./Message.module.css"

function Message(props) {
    return <div id={props.id} className={s.messageItem}>
        {props.msg}
    </div>
}

export default Message;