'use client'

import { CornerTopLeftIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import React from 'react'

const Back = () => {
    const router = useRouter()
    return (
        <div
            className="sticky md:fixed md:left-[2vw] xl:left-[20vw] md:top-12 top-4 flex items-start gap-2 cursor-pointer"
            onClick={() => router.back()}
        >
            <CornerTopLeftIcon strokeWidth="1.5" /> <p className="">Back</p>
        </div>
    )
}

export default Back
