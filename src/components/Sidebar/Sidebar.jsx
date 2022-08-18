import React from "react";
import s from "./Sidebar.module.css"

function Sidebar() {
    return (
        <nav className={s.nav} id="Sidebar">
            <div>
                <a href="/profile" className={s.button}>Profile</a>
            </div>
            <div>
                <a href="/messages" className={s.button}>Messages</a>
            </div>
            <div>
                <a href="#" className={s.button}>News</a>
            </div>
            <div>
                <a href="#" className={s.button}>Music</a>
            </div>
            <div>
                <a href="#" className={s.button}>Settings</a>
            </div>
        </nav>
    )
}

export default Sidebar;