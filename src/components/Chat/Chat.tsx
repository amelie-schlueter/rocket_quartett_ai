'use client'

import { Rocket } from '@/lib/types'
import {
    EnterIcon,
    MagicWandIcon,
    PaperPlaneIcon,
    RadiobuttonIcon,
    RocketIcon,
} from '@radix-ui/react-icons'
import { useChat } from 'ai/react'
import { Input } from '../ui/input'
import { useEffect, useRef } from 'react'
import { Button } from '../ui/button'

export default function Chat({ data }: { data: Rocket }) {
    const inputRef = useRef<HTMLInputElement>(null) // Step 2
    useEffect(() => {
        // Step 3
        inputRef.current?.focus()
    }, [])

    const { messages, input, handleInputChange, handleSubmit, metadata } =
        useChat({
            initialMessages: [
                {
                    role: 'assistant',
                    id: '1',
                    content: `Hello! I am your personal Rocket Assistent. You are interested in the rocket: ${data.name}. How can I help you?`,
                },
            ],
        })
    return (
        <div className="flex flex-col  mt-4 w-full max-w-[700px]  bg-background  stretch pb-32">
            <div className=" w-full">
                {messages.map((m) => (
                    <div
                        key={m.id}
                        className="w-full border-b-[.5px] border-white/20 py-4"
                    >
                        {m.role === 'user' ? (
                            <div className=" grid grid-cols-[0.07fr,1fr] gap-2 items-start">
                                <div className="w-8 h-8 border-[1px] rounded-md border-white/20 flex items-center justify-center">
                                    <RocketIcon strokeWidth="1.5" />
                                </div>
                                {m.content}
                            </div>
                        ) : (
                            <div className=" grid grid-cols-[0.07fr,1fr] gap-2 items-start">
                                <div className="w-8 h-8 border-[1px] rounded-md border-white/20 flex items-center justify-center">
                                    <RadiobuttonIcon strokeWidth="1.5" />
                                </div>
                                {m.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="fixed bg-background bottom-0 bg-gradient-to-t  from-black from-80% to-black/30 w-full left-0 right-0 flex items-center justify-center ">
                <form
                    onSubmit={handleSubmit}
                    className="  border-2 mx-auto left-0 right-0 border-white/20 rounded-md max-w-lg w-full h-[125px] p-6"
                >
                    <div className="flex gap-1 ">
                        <Input
                            value={input}
                            ref={inputRef} // Step 4
                            onChange={handleInputChange}
                            className="px-4 py-2  text-base border-white/20 border-[1px] rounded-md w-full max-w-md mx-auto text-white placeholder:text-white/40"
                            placeholder="Ask something about the planet"
                        />
                        <Button variant={'default'} className="">
                            <PaperPlaneIcon />
                        </Button>
                    </div>
                    <p className="text-xs text-white/40 text-center mt-4">
                        This is a Rocket Chatbot. Ask questions about the
                        rocket.
                    </p>

                    {/* <button type="submit">Send</button> */}
                </form>
            </div>
        </div>
    )
}
