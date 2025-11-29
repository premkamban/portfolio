"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
    {
        title: "AI-Driven SDLC Pipeline",
        description: "A custom MCP server connecting PO, Figma, and Azure Boards to automate code generation and documentation, achieving ~97% delivery efficiency.",
        tags: ["MCP Server", "AI Agents", "Azure DevOps", "Figma API"],
        link: "#",
        github: "#"
    },
    {
        title: "Live Streaming Platform Migration",
        description: "Architected the migration of a high-scale live streaming platform to Next.js, improving performance and SEO across multiple pods.",
        tags: ["Next.js", "Performance", "Video Streaming", "SEO"],
        link: "#",
        github: "#"
    },
    {
        title: "Enterprise UI Design System",
        description: "Redesigned organizational UI architecture using ATOM-based reusable components in Next.js and Solid.js.",
        tags: ["Design System", "Atomic Design", "Solid.js", "Next.js"],
        link: "#",
        github: "#"
    }
]

export function Projects() {
    return (
        <section id="projects" className="container py-20 md:py-32">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
                <p className="mt-4 text-muted-foreground">Key initiatives and architectural achievements.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="flex h-full flex-col overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg">
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription className="mt-2">{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="text-xs">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="flex gap-4">
                                <Button variant="outline" size="sm" className="w-full" asChild>
                                    <Link href={project.github}>
                                        <Github className="mr-2 h-4 w-4" /> Code
                                    </Link>
                                </Button>
                                <Button size="sm" className="w-full" asChild>
                                    <Link href={project.link}>
                                        <ExternalLink className="mr-2 h-4 w-4" /> Demo
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
