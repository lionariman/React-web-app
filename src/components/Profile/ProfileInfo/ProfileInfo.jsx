import React from "react";
import s from "./ProfileInfo.module.css"

const logoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZOgpX4nBt9jcrBnc7gp-u75y5sVDwXQZvQ&usqp=CAU';

function ProfileInfo() {
    return <div>
        <div className={s.avatar}>
            <img src={logoUrl} alt='avatar'></img>
        </div>
        <div className={s.description}>
            Description
        </div>
    </div>

}

export default ProfileInfo;