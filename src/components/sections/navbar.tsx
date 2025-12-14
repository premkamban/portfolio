"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, Linkedin, Github } from "lucide-react"

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)

    const navItems = [
        { name: "Experience", href: "#experience" },
        { name: "Skills", href: "#skills" },
        { name: "Certifications", href: "#certifications" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ]

    const socialLinks = [
        { name: "LinkedIn", href: "https://www.linkedin.com/in/premkamban/", icon: Linkedin },
        { name: "GitHub", href: "https://github.com/premkamban", icon: Github },
    ]

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4">
                {/* Left side - Logo & Navigation */}
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center">
                        <span className="font-bold text-lg">
                            Prem Kamban
                        </span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/90"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Right side - Social Icons & Mobile Menu */}
                <div className="flex items-center gap-4">
                    {/* Social Media Icons - Desktop */}
                    <div className="hidden md:flex items-center gap-2">
                        {socialLinks.map((social) => (
                            <Link
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-md p-2 text-foreground/60 transition-colors hover:bg-accent hover:text-foreground"
                                aria-label={social.name}
                            >
                                <social.icon className="h-5 w-5" />
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="inline-flex items-center justify-center rounded-md p-2 text-foreground/60 transition-colors hover:bg-accent hover:text-foreground md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="border-t border-border/40 md:hidden">
                    <div className="container mx-auto px-4 py-4 space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-base font-medium text-foreground/70 transition-colors hover:bg-accent hover:text-accent-foreground"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="flex items-center gap-4 pt-4 border-t border-border/40">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-md p-2 text-foreground/60 transition-colors hover:bg-accent hover:text-foreground"
                                    aria-label={social.name}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <social.icon className="h-5 w-5" />
                                    <span className="ml-2 text-sm font-medium">{social.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
