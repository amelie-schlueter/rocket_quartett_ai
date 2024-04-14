import { Rocket } from '@/lib/types'
import Image from 'next/image'
import React from 'react'
import Back from './Back'
import ChatHeaderItem from './ChatHeaderItem'

const ChatHeader = ({ data }: { data: Rocket }) => {
    return (
        <header className="p-4 border-[1px] gap-4 grid grid-cols-[1fr,0.7fr] border-orange-500 sticky bg-black top-0">
            <Back />
            <div>
                <h1 className="">{data.name}</h1>
                <p>{data.information}</p>
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
            </div>
            <div>
                <Image
                    src={`/${data.image}`}
                    height={1000}
                    width={1000}
                    className="w-full h-full object-cover"
                    alt="image"
                />{' '}
            </div>
        </header>
    )
}

export default ChatHeader
