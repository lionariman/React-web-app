import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";

function Profile(props) {
    return (
        <div>
            <ProfileInfo></ProfileInfo>
            <Posts store={props.store}></Posts>
        </div>
    )
}

export default Profile;