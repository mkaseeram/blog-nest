"use client"
import React, { useContext, useEffect, useState } from 'react';
import styles from "./singlePost.module.css";
import Image from 'next/image';
import { PostContext } from '@/Components/context/PostContext';

function SinglePostPage({ params }) {
  const postId = params.slug
 // console.log(postId, "id")
  const { post } = useContext(PostContext);
  console.log(post, "post");
  if (!post) return <div>Loading...</div>
  
  const postData = post.find(post => post.id === postId);
  //console.log(postData,"post data")
  
  const imageURL = `https://farm${postData.farm}.staticflickr.com/${postData.server}/${postData.id}_${postData.secret}_m.jpg`;

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={imageURL}
          alt=''
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{postData.title}</h1>
        <div className={styles.details}>
          <Image
            src={imageURL}
            alt=''
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>{postData.owner}</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2022</span>
          </div>
        </div>
        <div className={styles.contact}>
          offer greatly scale instead unknown saved power went page stairs lips decide select loud stove obtain matter theory handle bit struggle fell sitting watch
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage 
