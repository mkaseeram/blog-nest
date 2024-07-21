"use client"
import React from 'react'
import styles from "./navLink.module.css";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavLink({ item }) {
    const pathName= usePathname()
    //console.log(item);
    return (
        <div className={styles.container}>
            <Link href={item.path} className={`${styles.container} ${pathName===item.path && styles.active}`}>
            {item.title}
            </Link>
        </div>
    )
}

export default NavLink
