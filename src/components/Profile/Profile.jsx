import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
// import Posts from "./Posts/Posts";
import PostsContainer from "./Posts/PostsContainer";

function Profile(props) {
    return (
        <div>
            <ProfileInfo></ProfileInfo>
            {/* <Posts profilePage={props.profilePage}></Posts> */}
            <PostsContainer ></PostsContainer>
        </div>
    )
}

export default Profile;