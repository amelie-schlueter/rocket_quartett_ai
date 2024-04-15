'use client'
import Card from '@/components/Cards/Card'
import { Combobox } from '@/components/Combobox'
import { Footer } from '@/components/Layout/Footer'
import FooterOverlay from '@/components/Layout/FooterOverlay'
import HeaderOverlay from '@/components/Layout/HeaderOverlay'
import Navbar from '@/components/Layout/Navbar'
import { RocketDataContext } from '@/lib/RocketDataContext'
import { rocketData } from '@/lib/data'

import React, { useContext } from 'react'

const Page = () => {
    const context = useContext(RocketDataContext)

    return (
        <div>
            <header className="  w-full flex flex-col md:flex-row justify-between items-center mb-16">
                <div className="w-full">
                    <h1 className="break-normal">Rocket-Quartett</h1>
                    <p>
                        Welcome to our Rocket Quartet, the best rocket
                        experience on our home planet.
                    </p>
                </div>
                <Navbar />
            </header>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6">
                {context!.data.map((rocket, i) => {
                    return <Card key={i} rocket={rocket} />
                })}
            </div>
            <Footer />
        </div>
    )
}

export default Page
