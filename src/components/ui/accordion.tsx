"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionProps {
    children: React.ReactNode
    className?: string
}

interface AccordionItemProps {
    title: string
    children: React.ReactNode
    defaultOpen?: boolean
    className?: string
}

const AccordionContext = React.createContext<{
    openItems: Set<string>
    toggleItem: (title: string) => void
}>({
    openItems: new Set(),
    toggleItem: () => {},
})

export function Accordion({ children, className }: AccordionProps) {
    const [openItems, setOpenItems] = React.useState<Set<string>>(new Set())

    const toggleItem = React.useCallback((title: string) => {
        setOpenItems((prev) => {
            const next = new Set(prev)
            if (next.has(title)) {
                next.delete(title)
            } else {
                next.add(title)
            }
            return next
        })
    }, [])

    return (
        <AccordionContext.Provider value={{ openItems, toggleItem }}>
            <div className={cn("space-y-4", className)}>{children}</div>
        </AccordionContext.Provider>
    )
}

export function AccordionItem({ title, children, defaultOpen = false, className }: AccordionItemProps) {
    const { openItems, toggleItem } = React.useContext(AccordionContext)
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
        if (defaultOpen) {
            toggleItem(title)
        }
    }, [])

    const isOpen = mounted && openItems.has(title)

    return (
        <div className={cn("border rounded-lg overflow-hidden", className)}>
            <button
                type="button"
                onClick={() => toggleItem(title)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-accent/50 transition-colors"
            >
                <span className="font-semibold text-lg">{title}</span>
                <ChevronDown
                    className={cn(
                        "h-5 w-5 transition-transform duration-200",
                        isOpen && "transform rotate-180"
                    )}
                />
            </button>
            {isOpen && (
                <div className="p-4 pt-0 border-t animate-in slide-in-from-top-2 duration-200">
                    {children}
                </div>
            )}
        </div>
    )
}

