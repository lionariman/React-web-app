import React from "react";
import s from "./Sidebar.module.css"

function Sidebar() {
    return (
        <nav className={s.nav}>
            <div>
                <button>Profile</button>
            </div>
            <div>
                <button>News</button>
            </div>
            <div>
                <button>Messages</button>
            </div>
            <div>
                <button>Music</button>
            </div>
            <div>
                <button>Settings</button>
            </div>
        </nav>
    )
}

export default Sidebar;