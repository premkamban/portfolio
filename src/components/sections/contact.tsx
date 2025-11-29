"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Mail, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export function Contact() {
    return (
        <section id="contact" className="container py-20 md:py-32 bg-muted/30">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
                <p className="mt-4 text-muted-foreground">
                    Interested in discussing AI architecture, agentic workflows, or modern web development?
                    Feel free to reach out.
                </p>
            </div>

            <div className="mx-auto mt-12 max-w-md">
                <Card>
                    <CardHeader className="text-center">
                        <CardTitle>Contact Information</CardTitle>
                        <CardDescription>Connect with me on social platforms or send an email.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <Button size="lg" className="w-full" asChild>
                            <Link href="mailto:premkamban@gmail.com">
                                <Mail className="mr-2 h-4 w-4" /> Email Me
                            </Link>
                        </Button>
                        <div className="grid grid-cols-2 gap-4">
                            <Button variant="outline" size="lg" className="w-full" asChild>
                                <Link href="https://www.linkedin.com/in/premkamban/" target="_blank">
                                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="w-full" asChild>
                                <Link href="https://github.com/premkamban" target="_blank">
                                    <Github className="mr-2 h-4 w-4" /> GitHub
                                </Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

export function Footer() {
    return (
        <footer className="border-t py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built by Prem Kamban using Next.js, Tailwind CSS, and Framer Motion.
                </p>
                <div className="flex items-center gap-4">
                    <Link href="https://www.linkedin.com/in/premkamban/" target="_blank" className="text-muted-foreground hover:text-foreground">
                        <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link href="https://github.com/premkamban" target="_blank" className="text-muted-foreground hover:text-foreground">
                        <Github className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}
