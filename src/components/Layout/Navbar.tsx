'use client'
import React from 'react'
import { Filter } from './Filter'
import { Sort } from './Sort'

const Navbar = () => {
    return (
        <div className="mt-4 md:mt-0 flex flex-row gap-2 md:flex-col lg:flex-row">
            <Filter />
            <Sort />
        </div>
    )
}

export default Navbar
