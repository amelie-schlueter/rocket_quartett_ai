'use client'

import { ArrowLeftIcon, CornerTopLeftIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'

const Back = () => {
    const router = useRouter()
    return (
        <div
            className="fixed items-center w-full md:fixed left-0 top-0 mx-2 p-2 bg-gradient-to-b from-background  to-background/50   md:w-fit md:bg-transparent md:left-[2vw] xl:left-[20vw] md:top-4  flex  gap-1 cursor-pointer"
            onClick={() => router.back()}
        >
            <Button className="gap-1" variant={'outline'}>
                <ArrowLeftIcon strokeWidth="1.5" /> Back
            </Button>
        </div>
    )
}

export default Back
