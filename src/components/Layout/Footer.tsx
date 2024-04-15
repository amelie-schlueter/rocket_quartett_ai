import Link from 'next/link'

export const Footer = () => {
    return (
        <footer className=" w-full mx-auto flex items-center  text-muted-foreground justify-center my-4 py-4 ">
            This project was crafted by{' '}
            <Link
                href={'https://amelieschlueter.com'}
                className="underline hover:opacity-50 ml-1"
            >
                Amelie Schlüter
            </Link>
        </footer>
    )
}
