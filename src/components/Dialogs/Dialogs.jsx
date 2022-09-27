import React from "react";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import s from "./Dialogs.module.css"
import {
    addMessageActionCreator,
    onMessageChangeActionCreator
} from "../../store/store";

const Dialogs = (props) => {

    let dialogsList = props.dialogsPage.dialogsData.map((item, i) =>
        <Dialog key={i} id={item.id} name={item.name}></Dialog>);
    let messagesList = props.dialogsPage.messagesData.map((item, i) =>
        <Message key={i} id={item.id} msg={item.msg}></Message>);

    let refTextarea = React.createRef();
    let addMessage = () => { addMessageActionCreator(); }
    let onMessageChange = () => { onMessageChangeActionCreator(refTextarea.current.value) }

    return (
        <div className={s.dialogsComponent}>
            <div className={s.dialogsTitle}>
                <h2>Dialogs</h2>
            </div>
            <div className={s.dialogsBlock}>
                {dialogsList}
            </div>
            <div className={s.messagesBlock}>
                {messagesList}
            </div>
            <div className={s.textareaBlock}>
                <textarea
                    className={s.textarea}
                    ref={refTextarea}
                    value={props.dialogsPage.newMessageText}
                    onChange={onMessageChange}
                />
                <button
                    className={s.sendButton}
                    onClick={addMessage}
                >
                    Send
                </button>
            </div>
        </div>
    )
}

export default Dialogs;