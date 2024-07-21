import React from 'react'
import Link from 'next/link'

function NotFound() {
    return (
        <div>
            <h1>Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}

export default NotFound
