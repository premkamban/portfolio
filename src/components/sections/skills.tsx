"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function Skills() {
    const skillCategories = [
        {
            title: "Generative AI & Agentic Systems",
            skills: ["AI Architecture", "MCP Server", "RAG", "Vector Databases", "LLM Integration", "Agentic Workflows", "Prompt Engineering"]
        },
        {
            title: "Frontend Development",
            skills: ["React", "Next.js", "Solid.js", "TypeScript", "Tailwind CSS", "Redux-toolkit", "GraphQL", "SASS", "Plotly.js", "DeckGL"]
        },
        {
            title: "Backend & Cloud",
            skills: ["Node.js", "Python", "AWS", "Gcloud", "Azure", "Docker", "Kubernetes", "System Architecture"]
        },
        {
            title: "Testing & DevOps",
            skills: ["Jest", "Cypress", "TDD", "Cucumber", "Puppeteer", "Azure DevOps", "Performance Optimization"]
        }
    ]

    const learning = [
        {
            category: "AI Architect",
            items: [
                "Generative AI & LLM fundamentals",
                "Transformer internals & inference optimization",
                "Multi-agent orchestration frameworks",
                "Knowledge Base architecture (embeddings, vector DB, retrieval pipelines)",
                "RAG patterns & enterprise governance",
                "Distributed systems & scalable AI infra",
                "Designing agentic SDLC systems for enterprise teams"
            ]
        }
    ]

    return (
        <section id="skills" className="container py-20 md:py-32 bg-muted/30">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills & Expertise</h2>
                <p className="mt-4 text-muted-foreground">My technical arsenal and what I&apos;m currently mastering.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle>{category.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <Badge key={skill} className="text-sm py-1 px-3">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-start"
                >
                    <Card className="h-full w-full border-indigo-500/50 bg-indigo-500/5">
                        <CardHeader>
                            <CardTitle className="text-lg text-indigo-400">Active Projects & Development</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {learning.map((group, idx) => (
                                    <div key={idx}>
                                        <h4 className="mb-3 text-base font-semibold text-foreground">{group.category}</h4>
                                        <ul className="space-y-2.5">
                                            {group.items.map((item, i) => (
                                                <li key={i} className="flex items-start text-sm leading-relaxed text-muted-foreground">
                                                    <span className="mr-2.5 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
