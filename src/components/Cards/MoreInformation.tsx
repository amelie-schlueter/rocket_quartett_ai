import { Rocket } from '@/lib/types'
import React from 'react'
import ChatHeaderItem from '../Chat/ChatHeaderItem'
import Image from 'next/image'

const MoreInformation = ({ data }: { data: Rocket }) => {
    return (
        <div className="p-4  gap-4 hidden md:grid grid-cols-1 md:grid-cols-[1fr,1fr]">
            <div>
                <h1 className="mb-2">{data.name}</h1>
                <p>{data.information}</p>
                <div className=" py-4 grid md:grid-cols-2 md:gap-x-4 text-sm">
                    <ChatHeaderItem value={data.max_speed} label={'Speed'} />
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
        </div>
    )
}

export default MoreInformation
