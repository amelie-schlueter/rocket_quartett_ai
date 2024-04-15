import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="max-w-[700px] my-8 text-muted-foreground text-center text-sm">
            This project is crafted by{' '}
            <Link
                href={'https://amelieschlueter.com'}
                className="underline hover:opacity-50"
            >
                Amelie Schlüter
            </Link>
        </footer>
    )
}

export default Footer
