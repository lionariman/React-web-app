import React from "react";
import s from "./Header.module.css"

const logoUrl = 'https://cdn.logo.com/hotlink-ok/logo-social-sq.png';

function Header() {
    return (
        <header className={s.header}>
            <img src={logoUrl} alt='Logo'></img>
        </header>
    )
}

export default Header;