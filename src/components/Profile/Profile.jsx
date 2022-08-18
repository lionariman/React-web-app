import React from "react";
import s from "./Profile.module.css"
import Post from "./Post/Post";

const logoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZOgpX4nBt9jcrBnc7gp-u75y5sVDwXQZvQ&usqp=CAU';
// const profileHeaderUrl = 'https://data.whicdn.com/images/339008399/original.jpg'

function Profile() {
    return (
        <div>
            <div className={s.avatar}>
                <img src={logoUrl} alt='avatar'></img>
            </div>
            <div className={s.allPosts}>
                <p>All Posts</p>
                <Post name="Nariman"></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
            </div>
        </div>
    )
}

export default Profile;