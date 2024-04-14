'use client'

import { CornerTopLeftIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import React from 'react'

const Back = () => {
    const router = useRouter()
    return (
        <div
            className="fixed left-[20vw] top-12 flex items-start gap-2 cursor-pointer"
            onClick={() => router.back()}
        >
            <CornerTopLeftIcon strokeWidth="1.5" /> <p className="">Back</p>
        </div>
    )
}

export default Back
