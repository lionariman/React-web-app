import React from "react";
import s from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

function LinkItem(props) {
    return <div className={s.button}>
        <NavLink to={props.link} className={({isActive}) => (isActive ? s.active : "")}>{
            props.link.replace("/", "")
        }</NavLink>
    </div>
}

function Sidebar() {
    return (
        <nav className={s.nav} id="Sidebar">
            <LinkItem link="/profile"></LinkItem>
            <LinkItem link="/messages"></LinkItem>
            <LinkItem link="/news"></LinkItem>
            <LinkItem link="/music"></LinkItem>
            <LinkItem link="/settings"></LinkItem>
        </nav>
    )
}

export default Sidebar;