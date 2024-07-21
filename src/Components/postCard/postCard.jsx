import React from 'react';
import styles from "./postCard.module.css";
import Image from 'next/image';
import Link from 'next/link';


function PostCard({ post }) {

  const imageURL = `https://farm${post.farm}.staticflickr.com/${post.server}/${post.id}_${post.secret}_m.jpg`;
  const url = `https://farm${post.farm}.staticflickr.com/${post.server}/${post.id}_${post.secret}_m.jpg`;

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src={imageURL} alt='' fill className={styles.img} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>at here throat design anyone nervous after warn torn tonight direction two job studied swung double pipe proud similar old season industrial wife owner</p>
        <Link className={styles.link} href={{pathname:`/blog/${post.id}`}} >Read More</Link>
      </div>
    </div>
  )
}

export default PostCard