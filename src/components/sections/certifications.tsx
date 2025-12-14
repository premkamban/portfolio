"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ExternalLink, Award } from "lucide-react"
import Link from "next/link"

interface Certification {
    name: string
    issuer: string
    link: string
    description: string[]
    year?: string
    badge?: string
}

const certifications: Certification[] = [
    // Add your certifications here
    // Example structure:
    // {
    //     name: "AWS Certified Solutions Architect",
    //     issuer: "Amazon Web Services",
    //     link: "https://example.com/cert",
    //     description: [
    //         "Demonstrated expertise in designing distributed systems on AWS.",
    //         "Covered architecture patterns, security best practices, and cost optimization."
    //     ],
    //     year: "2024"
    // }
]

export function Certifications() {
    if (certifications.length === 0) {
        return null
    }

    return (
        <section id="certifications" className="container py-20 md:py-32">
            <div className="mb-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-3"
                >
                    <Award className="h-6 w-6 text-primary" />
                </motion.div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Certifications</h2>
                <p className="mt-4 text-muted-foreground">Professional credentials and validated expertise.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="group h-full flex flex-col transition-all hover:border-primary/50 hover:shadow-lg">
                            <CardHeader>
                                <div className="flex items-start justify-between gap-2">
                                    <div className="flex-1">
                                        <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                                            {cert.name}
                                        </CardTitle>
                                        <CardDescription className="mt-2 text-sm font-medium">
                                            {cert.issuer}
                                        </CardDescription>
                                    </div>
                                    {cert.badge && (
                                        <Badge variant="secondary" className="shrink-0">
                                            {cert.badge}
                                        </Badge>
                                    )}
                                </div>
                                {cert.year && (
                                    <Badge variant="outline" className="mt-2 w-fit">
                                        {cert.year}
                                    </Badge>
                                )}
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col">
                                <div className="mb-4 space-y-2 flex-1">
                                    {cert.description.map((desc, idx) => (
                                        <p key={idx} className="text-sm text-muted-foreground leading-relaxed">
                                            {desc}
                                        </p>
                                    ))}
                                </div>
                                <Link
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-sm font-medium text-primary hover:underline group/link"
                                >
                                    Verify Certification
                                    <ExternalLink className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
                                </Link>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

