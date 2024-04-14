'use client'
import Card from '@/components/Cards/Card'
import { Combobox } from '@/components/Combobox'
import Navbar from '@/components/Layout/Navbar'
import { RocketDataContext } from '@/lib/RocketDataContext'
import { rocketData } from '@/lib/data'

import React, { useContext } from 'react'

const Page = () => {
    const context = useContext(RocketDataContext)

    return (
        <div>
            <header className="header w-full flex flex-col md:flex-row justify-between items-center mb-16">
                <div>
                    <h1 className="">Rocket-Quartett</h1>
                    <p>
                        Welcome to our Rocket quartett the best rocket
                        experience on our home planet.
                    </p>
                </div>
                <Navbar />
            </header>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                {context!.data.map((rocket, i) => {
                    return <Card key={i} rocket={rocket} />
                })}
            </div>
        </div>
    )
}

export default Page
