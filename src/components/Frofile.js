import React from "react";

const logoUrl = 'https://cdn.logo.com/hotlink-ok/logo-social-sq.png';

function Profile() {
    return (
        <div className='profile'>
            <div className="avatar">
                <img src={logoUrl} alt='avatar'></img>
            </div>
            <div className="about">
                <h1>ABOUT</h1>
                <p>sdsadsdsada</p>
            </div>
        </div>
    )
}

export default Profile;