import React from "react";
import s from "./Profile.module.css"
import Post from "./Post/Post";

const logoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZOgpX4nBt9jcrBnc7gp-u75y5sVDwXQZvQ&usqp=CAU';

function MyPosts(props) {
    return <div className={s.allPosts}>
        <h2>All Posts</h2>
        {props.postsData}
    </div>

}

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

function Profile() {
    let postsData = [
        { name: 'Nariman', like: "19" },
        { name: 'Abdullah', like: "74" },
        { name: 'Linkoln', like: "2" },
        { name: 'Ronaldo', like: "44" },
        { name: 'Messi', like: "32" }
    ];

    const posts = postsData.map((item, i) => <Post key={i} name={item.name} like={item.like}></Post>)

    return (
        <div>
            <ProfileInfo></ProfileInfo>
            <MyPosts postsData={posts}></MyPosts>
        </div>
    )
}

export default Profile;