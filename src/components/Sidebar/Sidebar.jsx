import React from "react";
import s from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

// function LinkItem(props) {
//     return <div>
//         <NavLink to="/profile" className={s.button}>profile</NavLink>
//     </div>
// }

function Sidebar() {
    return (
        <nav className={s.nav} id="Sidebar">
            <div>
                <NavLink to="/profile" className={s.button}>profile</NavLink>
            </div>
            <div>
                <NavLink to="/messages" className={s.button}>messages</NavLink>
            </div>
            <div>
                <NavLink to="/news" className={s.button}>news</NavLink>
            </div>
            <div>
                <NavLink to="/music" className={s.button}>music</NavLink>
            </div>
            <div>
                <NavLink to="/settings" className={s.button}>settings</NavLink>
            </div>
        </nav>
    )
}

export default Sidebar;