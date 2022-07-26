import React from "react";

const logoUrl = 'https://cdn.logo.com/hotlink-ok/logo-social-sq.png';

function Header() {
    return (
        <header className='header'>
            <img src={logoUrl} alt='Logo'></img>
        </header>
    )
}

export default Header;