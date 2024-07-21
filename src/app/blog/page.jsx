"use client"
import React, { useContext, useEffect, useState } from 'react';
import styles from "./blog.module.css";
import PostCard from '@/Components/postCard/postCard';
import axios from 'axios';
import { PostContext } from '@/Components/context/PostContext';



async function Blog() {

  const {setPost}=useContext(PostContext);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=aac3a558f263825d41dd2f7800e4c4b6&tags=trees&per_page=24&format=json&nojsoncallback=1")
      .then((res) => {
        setPosts(res.data.photos.photo);
      })
  }, [])

  setPost(posts);

  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return (
          <div className={styles.post} key={post.id}>
            <PostCard post={post} />
          </div>
        )
      })}

    </div>
  )
}

export default Blog
