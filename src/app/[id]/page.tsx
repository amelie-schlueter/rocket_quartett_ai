import Card from '@/components/Cards/Card'
import Chat from '@/components/Chat/Chat'
import ChatHeader from '@/components/Chat/ChatHeader'
import { Combobox } from '@/components/Combobox'
import { rocketData } from '@/lib/data'
import React from 'react'

const Page = ({ params }: { params: { id: string } }) => {
    const data = rocketData.find((rocket) => rocket.id === parseInt(params.id))

    return (
        <div className="max-w-[700px] mx-auto bg-background">
            {data && <ChatHeader data={data} />}
            {data && <Chat data={data} />}
        </div>
    )
}

export default Page
