import React from "react";
import s from "./Friends.module.css";
import Friend from "./Friend/Friend";

function Friends(props) {
    return (
        <div className={s.friendsComponent}>
            <div className={s.friendsTitleBlock}>
                <h2>My friends</h2>
            </div>
            <div className={s.friendsListBlock}>
                {props.friendsPage.friendsData.map((item, i) =>
                    <Friend key={i} id={item.id} name={item.name} age={item.age}></Friend>)}
            </div>
            <div className={s.friendsChatMessagesBlock}>
                chat messages here
            </div>
        </div>
    )
}

export default Friends;