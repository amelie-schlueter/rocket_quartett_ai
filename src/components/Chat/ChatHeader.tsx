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
        <header className=" border-[1px] mt-12 border-orange-500 p-2 md:sticky bg-black top-0">
            <Back />
            <div className="w-full">
                <MoreInformationCollapsable data={data} />
                <MoreInformation data={data} />
            </div>
        </header>
    )
}

export default ChatHeader
