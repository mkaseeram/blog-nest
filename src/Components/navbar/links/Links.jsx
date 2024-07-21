"use client"
import React, { useState } from 'react';
import styles from "./links.module.css"
import NavLink from '../navLink/navLink';
import Image from 'next/image';

function Links() {
    const link = [
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        },
    ];

    const [open, setOpen] = useState(false);


    const session = true;
    const isAdmin = true;

    return (
        <div className={styles.container}>
            <div className={styles.link}>
                {link.map((link => (
                    <NavLink item={link} key={link.title} />
                )))}
                {
                    session ? (
                        <>
                            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                            <button className={styles.logout}>Logout</button>
                        </>
                    ) : (
                        <NavLink item={{ title: "Login", path: "/login" }} />
                    )
                }
            </div>
            {/* <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
            instead of button we used Image 
            */}

            <Image
            className={styles.menu}
            src="/menu.png"
            alt=""
            width={30}
            height={30}
            onClick={() => setOpen((prev) => !prev)}
            />
            {
                open && <div className={styles.mobileLink}>
                    {

                        link.map((link) => (
                            <NavLink item={link} key={link.title} />
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default Links
