import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

function Profile(props) {
    return (
        <div>
            <ProfileInfo ></ProfileInfo>
            <PostsContainer ></PostsContainer>
        </div>
    )
}

export default Profile;