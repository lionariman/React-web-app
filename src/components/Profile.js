import React from "react";
import s from "./Profile.module.css"

const logoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZOgpX4nBt9jcrBnc7gp-u75y5sVDwXQZvQ&usqp=CAU';
const profileHeaderUrl = 'https://data.whicdn.com/images/339008399/original.jpg'

function Profile() {
    return (
        <div className={s.profile}>
            <div className={s.profileHeader}>
                <img src={profileHeaderUrl} alt='profileHeader'></img>
            </div>
            <div className={s.avatar}>
                <img src={logoUrl} alt='avatar'></img>
            </div>
            <div className={s.about}>
                <h1>ABOUT</h1>
                <p>sdsadsdsada</p>
            </div>
        </div>
    )
}

export default Profile;