import type { Metadata } from 'next'
import { Inter, Manrope, Orbitron } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { RocketDataContextProvider } from '@/lib/RocketDataContext'
import Footer from '@/components/Layout/Footer'

const manrope = Manrope({ subsets: ['latin'], variable: '--manrope' })
const orbitron = Orbitron({ subsets: ['latin'], variable: '--orbitron' })

export const metadata: Metadata = {
    title: 'Rocket Quartett',
    description: 'Enjoy the best rocket experience on our home planet.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${manrope.className} ${orbitron.variable}`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <RocketDataContextProvider>
                        <main className="bg-background">{children}</main>
                    </RocketDataContextProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
