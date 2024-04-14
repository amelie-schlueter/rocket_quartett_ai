'use client'
import { Rocket } from '@/lib/types'

import Image from 'next/image'
import React from 'react'
import Back from './Back'
import ChatHeaderItem from './ChatHeaderItem'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible'
import MoreInformation from '../Cards/MoreInformation'
import MoreInformationCollapsable from '../Cards/MoreInformationCollapsable'

const ChatHeader = ({ data }: { data: Rocket }) => {
    return (
        <header className="p-4 border-[1px] gap-4 grid grid-cols-1 md:grid-cols-[1fr,1fr] border-orange-500 sticky bg-black top-0">
            <Back />
            <div className="w-full">
                <h1 className="">{data.name}</h1>
                <p>{data.information}</p>
                <MoreInformationCollapsable data={data} />
                <MoreInformation data={data} />
            </div>
            <div className="w-full h-full max-h-[200px] md:max-h-full">
                <Image
                    src={`/${data.image}`}
                    height={1000}
                    width={1000}
                    className="w-full h-full  object-cover"
                    alt="image"
                />{' '}
            </div>
        </header>
    )
}

export default ChatHeader
