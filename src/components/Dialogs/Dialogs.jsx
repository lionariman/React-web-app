import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css"

function DialogItem(props) {
    return (
        <div className={s.dialogItem}>
            <NavLink to={props.id} className={({ isActive }) => (isActive ? s.active : "")}>
                {props.name}
            </NavLink>
        </div>
    )
}

function MessageItem(props) {
    return <div id={props.id} className={s.messageItem}>
        {props.msg}
    </div>
}

function Dialogs() {
    let dialogsData = [
        { id: '1', name: 'Nariman' },
        { id: '2', name: 'Abdullah' },
        { id: '3', name: 'Linkoln' },
        { id: '4', name: 'Ronaldo' },
        { id: '5', name: 'Messi' }
    ];

    let messagesData = [
        { id: '1', msg: 'hi!' },
        { id: '2', msg: 'Wassap!!!' },
        { id: '3', msg: 'No! It is my burger, not yours!' },
        { id: '4', msg: 'what the heck!' },
        { id: '5', msg: 'well... I got it...' }
    ];

    const dialogs = dialogsData.map(item => <DialogItem name={item.name} id={item.id}></DialogItem>);
    const messages = messagesData.map(item => <MessageItem msg={item.msg} id={item.id}></MessageItem>);

    return (
        <div className={s.dialogsComponent}>
            <div className={s.dialogsTitle}>
                <h2>Dialogs</h2>
            </div>
            <div className={s.dialogs}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
        </div>
    )
}

export default Dialogs;