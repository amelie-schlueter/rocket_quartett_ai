import { Rocket } from '@/lib/types'
import React from 'react'
import ChatHeaderItem from '../Chat/ChatHeaderItem'

const MoreInformation = ({ data }: { data: Rocket }) => {
    return (
        <div className=" py-4  md:grid-cols-2 md:gap-x-4 text-sm hidden md:grid">
            <ChatHeaderItem value={data.weight} label={'Weight'} />
            <ChatHeaderItem value={data.weight} label={'Weight'} />
            <ChatHeaderItem value={data.lead_organization} label={'Org.'} />
            <ChatHeaderItem value={data.year_built} label={'year'} />
            <ChatHeaderItem value={data.involved_nations} label={'Nations'} />
            <ChatHeaderItem value={data.group} label={'Group'} />
        </div>
    )
}

export default MoreInformation
