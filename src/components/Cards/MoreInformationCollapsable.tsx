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

const MoreInformationCollapsable = ({ data }: { data: Rocket }) => {
    return (
        <Collapsible className="block md:hidden">
            <CollapsibleTrigger className="flex items-center gap-1 text-accent mt-4 underline">
                More Information
                <span>
                    <ChevronDownIcon />{' '}
                </span>
            </CollapsibleTrigger>
            <CollapsibleContent>
                <div className=" py-4 grid md:grid-cols-2 md:gap-x-4 text-sm">
                    <ChatHeaderItem value={data.weight} label={'Weight'} />
                    <ChatHeaderItem value={data.weight} label={'Weight'} />
                    <ChatHeaderItem
                        value={data.lead_organization}
                        label={'Organization'}
                    />
                    <ChatHeaderItem value={data.year_built} label={'year'} />
                    <ChatHeaderItem
                        value={data.involved_nations}
                        label={'Nations'}
                    />
                    <ChatHeaderItem value={data.group} label={'Group'} />
                </div>
            </CollapsibleContent>
        </Collapsible>
    )
}

export default MoreInformationCollapsable
