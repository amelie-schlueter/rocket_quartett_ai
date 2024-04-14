import React from 'react'

const ChatHeaderItem = ({
    value,
    label,
}: {
    value: string | Number
    label: string
}) => {
    return (
        <div className="grid grid-cols-2 border-t p-2">
            <p className="text-orange-500  font-semibold">{label}:</p>
            <p className="text-right">{value.toString()}</p>
        </div>
    )
}

export default ChatHeaderItem
