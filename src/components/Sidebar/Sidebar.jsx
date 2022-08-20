import React from "react";
import s from "./Sidebar.module.css";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <nav className={s.nav} id="Sidebar">
            <div>
                <Link to="/profile" className={s.button}>profile</Link>
            </div>
            <div>
                <Link to="/messages" className={s.button}>messages</Link>
            </div>
            <div>
                <Link to="/news" className={s.button}>news</Link>
            </div>
            <div>
                <Link to="/music" className={s.button}>music</Link>
            </div>
            <div>
                <Link to="/settings" className={s.button}>settings</Link>
            </div>
        </nav>
    )
}

export default Sidebar;