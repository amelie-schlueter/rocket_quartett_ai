'use client'
import React from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible'
import ChatHeaderItem from '../Chat/ChatHeaderItem'
import { Rocket } from '@/lib/types'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

const MoreInformationCollapsable = ({ data }: { data: Rocket }) => {
    return (
        <div className="block md:hidden">
            {' '}
            <h1 className="">{data.name}</h1>
            <Collapsible className=" pb-4">
                <CollapsibleTrigger className="flex items-center gap-1 text-accent mt-4 underline">
                    More Information
                    <span>
                        <ChevronDownIcon />{' '}
                    </span>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <p>{data.information}</p>
                    <div className=" py-4 grid md:grid-cols-2 md:gap-x-4 text-sm">
                        <ChatHeaderItem value={data.weight} label={'Weight'} />
                        <ChatHeaderItem value={data.weight} label={'Weight'} />
                        <ChatHeaderItem
                            value={data.lead_organization}
                            label={'Organization'}
                        />
                        <ChatHeaderItem
                            value={data.year_built}
                            label={'year'}
                        />
                        <ChatHeaderItem
                            value={data.involved_nations}
                            label={'Nations'}
                        />
                        <ChatHeaderItem value={data.group} label={'Group'} />
                    </div>
                    <div className="w-full h-fullmd:max-h-full">
                        <Image
                            src={`/${data.image}`}
                            height={1000}
                            width={1000}
                            className="w-full h-full  object-cover"
                            alt="image"
                        />{' '}
                    </div>
                </CollapsibleContent>
            </Collapsible>
        </div>
    )
}

export default MoreInformationCollapsable
