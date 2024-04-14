'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from '@/components/ui/command'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { ChevronDownIcon, TrashIcon } from '@radix-ui/react-icons'
import { rocketData } from '@/lib/data'
import { RocketDataContext } from '@/lib/RocketDataContext'

export function Sort() {
    const sortOptions = [
        'weight',
        'max_speed',
        'payload',
        'lead_organization',
        'year_built',
    ]
    const context = React.useContext(RocketDataContext)
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState('')
    const onValueChange = (value: string) => {
        // sort after year built
        // switch statemen

        if (value === 'year_built') {
            context?.setData((prev) =>
                prev.slice().sort((a, b) => b.year_built - a.year_built)
            )
        } else if (value === 'weight') {
            context?.setData((prev) =>
                prev.slice().sort((a, b) => b.weight - a.weight)
            )
        } else if (value === 'max_speed') {
            context?.setData((prev) =>
                prev.slice().sort((a, b) => b.max_speed - a.max_speed)
            )
        } else if (value === 'payload') {
            context?.setData((prev) =>
                prev.slice().sort((a, b) => b.payload - a.payload)
            )
        } else if (value === 'lead_organization') {
            context?.setData((prev) =>
                prev
                    .slice()
                    .sort((a, b) =>
                        a.lead_organization.localeCompare(b.lead_organization)
                    )
            )
        }
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value ? value : 'Sort...'}
                    <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Sort" />
                    <CommandEmpty>No Item found.</CommandEmpty>
                    {/* Reset Option */}
                    <CommandGroup>
                        <CommandItem
                            key="clear-selection"
                            value=""
                            className="text-accent"
                            onSelect={() => {
                                setValue('')
                                setOpen(false)
                                context?.setData(rocketData) // Reset the filtered data
                            }}
                        >
                            <p className="flex items-center w-full justify-between">
                                Remove Sort
                                <span className="">
                                    <TrashIcon />{' '}
                                </span>
                            </p>
                        </CommandItem>
                    </CommandGroup>
                    <CommandGroup>
                        {sortOptions.map((option, i) => (
                            <CommandItem
                                key={i}
                                value={option}
                                onSelect={(currentValue) => {
                                    setValue(
                                        currentValue === value
                                            ? ''
                                            : currentValue
                                    )
                                    setOpen(false)
                                    onValueChange(currentValue)
                                }}
                            >
                                <p>{option}</p>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
