"use client"
import React, { createContext, useState } from 'react'

export const PostContext = createContext();

function PostProvider({ children }) {
    const [post, setPost]= useState(null)

    return (
        <PostContext.Provider value={{post, setPost}}>
            {children}
        </PostContext.Provider>

    )
}

export default PostProvider
