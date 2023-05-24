import React from 'react';
import Link from 'next/link'

export default function Hero() {
    return (
        <>
            <header className='hero__header'>
                <h1>Test User</h1>
                <h2>Test Title</h2>
                <Link href='/form'>
                    Create Resume
                </Link>
                <p>Scroll Down</p>
            </header>
        </>
    )
}