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
import {
    ChevronDownIcon,
    DividerHorizontalIcon,
    RowsIcon,
    TrashIcon,
} from '@radix-ui/react-icons'
import { rocketData } from '@/lib/data'
import { RocketDataContext } from '@/lib/RocketDataContext'

export function Filter() {
    const context = React.useContext(RocketDataContext)

    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState('')
    const getRocketGroups = () => {
        const groupSet = new Set() // To ensure unique group names
        const groupsWithLetters = [] as {
            label: string
            value: string // Slug value
        }[]

        rocketData.forEach((item) => {
            // Check if the group hasn't been added yet
            if (item.group && !groupSet.has(item.group)) {
                groupSet.add(item.group) // Mark the group as added

                // Generate slug from item.group
                const slug = item.group
                    .toLowerCase()
                    .replace(/[\s\W-]+/g, '-') // Replacing spaces, special characters with "-"
                    .replace(/(^-+|-+$)/g, '') // Removing leading and trailing "-"

                // Push the group along with its generated slug to the array
                groupsWithLetters.push({
                    label: item.group,
                    value: slug, // Using slug as value
                })
            }
        })

        return groupsWithLetters as {
            label: string
            value: string // Slug value
        }[]
    }

    const groups = getRocketGroups()

    // Assuming you have a utility function for slugification
    const slugify = (text: string) => {
        return text
            .toLowerCase()
            .replace(/[\s\W-]+/g, '-') // Replace spaces and non-word chars with "-"
            .replace(/(^-+|-+$)/g, '') // Trim leading and trailing "-"
    }

    const onValueChange = (value: string) => {
        // Now, we assume `value` is a slug, so we compare using slugs.
        // You would generate a slug for the appropriate field in `rocketData` for accurate comparison.
        const filteredRockets = rocketData?.filter((rocket) => {
            // Assuming you need to compare `value` slug with a slugified version of another field for match.
            const rocketGroupSlug = slugify(rocket.group) // Example: slugifying the `group`

            console.log(rocketGroupSlug, value)
            return rocketGroupSlug === value // Direct comparison of slugs
        })
        if (filteredRockets) {
            context?.setData(filteredRockets)
        } else {
            context?.setData(rocketData)
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
                    {value
                        ? groups.find(
                              (group) => group.value.toLowerCase() === value
                          )?.label || 'Filter...'
                        : 'Search Group...'}
                    <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search Group..." />
                    <CommandEmpty>No Group found.</CommandEmpty>
                    {/* Reset Option */}
                    <CommandGroup>
                        <CommandItem
                            key="clear-selection"
                            value=""
                            onSelect={() => {
                                setValue('')
                                setOpen(false)
                                context?.setData(rocketData) // Reset the filtered data
                            }}
                        >
                            <p className="flex items-center w-full justify-between">
                                Clear Filter
                                <span className="">
                                    <TrashIcon />{' '}
                                </span>
                            </p>
                        </CommandItem>
                    </CommandGroup>
                    <CommandGroup>
                        {groups.map((group) => (
                            <CommandItem
                                key={group.value}
                                value={group.value}
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
                                <p>{group.label}</p>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
