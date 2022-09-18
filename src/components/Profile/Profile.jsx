import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";

function Profile(props) {
    return (
        <div>
            <ProfileInfo></ProfileInfo>
            <Posts profilePage={props.profilePage}
                methods={props.methods}></Posts>
        </div>
    )
}

export default Profile;