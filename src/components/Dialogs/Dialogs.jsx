import React from "react";
import DialogItem from "./Dialog/Dialog";
import MessageItem from "./Message/Message";
import s from "./Dialogs.module.css"

function Dialogs(props) {
    return (
        <div className={s.dialogsComponent}>
            <div className={s.dialogsTitle}>
                <h2>Dialogs</h2>
            </div>
            <div className={s.dialogs}>
                {props.data['dialogsData'].map((item, i) =>
                    <DialogItem key={i} name={item.name} id={item.id}></DialogItem>)}
            </div>
            <div className={s.messages}>
                {props.data['messagesData'].map((item, i) =>
                    <MessageItem key={i} msg={item.msg} id={item.id}></MessageItem>)}
            </div>
        </div>
    )
}

export default Dialogs;