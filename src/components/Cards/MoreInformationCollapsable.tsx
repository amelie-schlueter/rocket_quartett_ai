'use client'
import React from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible'
import ChatHeaderItem from '../Chat/ChatHeaderItem'
import { Rocket } from '@/lib/types'
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

const MoreInformationCollapsable = ({ data }: { data: Rocket }) => {
    const [open, setOpen] = React.useState(false)
    return (
        <div className="block md:hidden">
            {' '}
            <h2 className="mt-2 text-[2rem]">{data.name}</h2>
            <Collapsible className=" ">
                <CollapsibleTrigger
                    className="flex items-center gap-1 text-primary mt-4 mb-3 underline"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    More Information
                    <span>
                        {!open ? <ChevronDownIcon /> : <ChevronUpIcon />}
                    </span>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <p>{data.information}</p>
                    <div className=" py-4 grid md:grid-cols-2 md:gap-x-4 text-sm">
                        <ChatHeaderItem
                            value={data.max_speed}
                            label={'Speed'}
                        />
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
                    <div className="w-full h-full">
                        <Image
                            src={`/${data.image}`}
                            height={1000}
                            width={1000}
                            className="w-full h-full  max-h-[200px]  object-cover"
                            alt={data.name}
                        />{' '}
                    </div>
                </CollapsibleContent>
            </Collapsible>
        </div>
    )
}

export default MoreInformationCollapsable
