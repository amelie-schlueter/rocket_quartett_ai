'use client'

import { createContext, useState } from 'react'
import { rocketData } from './data'
import { Rocket } from './types'

interface RocketDataContextType {
    data: Rocket[]
    setData: React.Dispatch<React.SetStateAction<Rocket[]>>
}

// Creating the context with an initial default value.
// Since the actual value will be set through the provider, you can use a partial or undefined default value here.
export const RocketDataContext = createContext<
    RocketDataContextType | undefined
>(undefined)

export const RocketDataContextProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [data, setData] = useState<Rocket[]>(rocketData)

    return (
        <RocketDataContext.Provider value={{ data, setData }}>
            {children}
        </RocketDataContext.Provider>
    )
}

export type RocketContextType = {
    data: Rocket[]
    setData: React.Dispatch<React.SetStateAction<Rocket[]>>
}
