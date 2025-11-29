"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface Job {
    title: string
    company: string
    period: string
    description: string[]
    skills: string[]
}

const experiences: Job[] = [
    {
        title: "Senior Lead – IT (Architect-Level)",
        company: "Bajaj Finserv",
        period: "Aug 2025 – Present",
        description: [
            "Led architecture migration of the Live Streaming Platform to Next.js, improving rendering performance, SEO, and scalability across pods.",
            "Drove Solid.js → Next.js modernization, ensuring component parity, design system alignment, and 100% compatibility during migration.",
            "Architected an AI-driven SDLC pipeline using a custom MCP server, enabling PO, Figma, DMT, developers to connect models, repos, Azure Boards, and Figma → achieving ~97% delivery efficiency with code generation & automated documentation.",
            "Evaluated enterprise-grade IDEs for agentic software development, enabling AI-assisted coding, review, and autonomous development workflows.",
            "Redesigned org-level UI architecture using ATOM-based reusable components (Next.js & Solid.js) to drive a unified design system and reduce rework.",
            "Improved Core Web Vitals & deployment efficiency, resolving technical debt across TTFB, LCP, route hydration, caching, and build pipeline optimization.",
            "Mentored multiple pods (8–12 members each) and aligned architecture decisions across streaming, loan, and calculator verticals."
        ],
        skills: ["Next.js", "Solid.js", "AI Architecture", "MCP Server", "System Design", "Performance Optimization"]
    },
    {
        title: "Front End Lead",
        company: "Persistent Systems",
        period: "Dec 2023 - Jun 2025",
        description: [
            "Spearheaded a dynamic front-end development team, providing mentorship and guidance to ensure the successful delivery of projects.",
            "Designed and developed cutting-edge widgets and components using React JS and Typescript to enhance the user interface and functionality of CRM systems.",
            "Implemented robust testing strategies using Cypress and Jest to ensure the reliability and performance of applications.",
            "Orchestrated seamless project integrations by leveraging Docker, Kubernetes, and AWS, streamlining the deployment process.",
            "Played a pivotal role in the containerization of applications using Kubernetes and managed application images effectively.",
            "Led the successful implementation of Zendesk CRM development projects, meeting and exceeding client expectations.",
            "Enhanced team productivity by introducing best practices and adopting Redux-toolkit for state management.",
            "Contributed to the optimization of cloud resources by leveraging AWS and Gcloud services."
        ],
        skills: ["React JS", "TypeScript", "Redux-toolkit", "GraphQL", "Ruby on Rails", "AWS", "Gcloud", "Docker", "Kubernetes"]
    },
    {
        title: "Senior Frontend Developer",
        company: "IBM",
        period: "May 2021 - Dec 2023",
        description: [
            "Implemented React based Web application for data engineering.",
            "UI implementation with redux-toolkit and react-bootstrap.",
            "Implemented Maps using DeckGL and folium using Python.",
            "Designed implementation with HTML, CSS3, SASS.",
            "Integrated 3D Maps with Python and DeckGL.",
            "Managed Azure cloud Devops and application monitoring.",
            "Integrated maps and charts with Plotly.js."
        ],
        skills: ["React", "Redux-toolkit", "Python", "DeckGL", "Azure DevOps", "SASS", "Plotly.js"]
    },
    {
        title: "React Developer",
        company: "Cognizant",
        period: "Oct 2020 - May 2021",
        description: [
            "Re-structured backbone JS app to React framework.",
            "Executed Architecture and Design change with TDD process.",
            "Implemented React components with @react-testing-library.",
            "Implemented unit tests with Jest and enzyme.",
            "Performed UI Automation using Cucumber and puppeteer."
        ],
        skills: ["React", "TDD", "Jest", "Enzyme", "Cucumber", "Puppeteer"]
    },
    {
        title: "Programmer Analyst",
        company: "Cognizant",
        period: "Jun 2018 - Oct 2020",
        description: [
            "Built pages with Responsive UI and developed React components.",
            "Fixed bugs in angular modules and created tests.",
            "Outsourced React module to monolithic app."
        ],
        skills: ["React", "Angular", "Responsive UI", "Semantic HTML"]
    },
    {
        title: "Software Engineer",
        company: "Checktronix India Pvt Ltd",
        period: "Jul 2016 - Jun 2018",
        description: [
            "Built UI components in React.",
            "Fixed bugs in Javascript application.",
            "Performed component testing using Jest.",
            "Conducted component manual testing with testcases."
        ],
        skills: ["React", "JavaScript", "Jest", "Manual Testing"]
    }
]

export function Experience() {
    return (
        <section id="experience" className="container py-20 md:py-32">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Professional Experience</h2>
                <p className="mt-4 text-muted-foreground">My journey in tech, from Solutions Architect to AI Architect.</p>
            </div>

            <div className="relative mx-auto max-w-3xl">
                {/* Vertical Line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-ml-px" />

                <div className="space-y-12">
                    {experiences.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Dot */}
                            <div className="absolute left-[-5px] top-6 h-3 w-3 rounded-full bg-primary md:left-1/2 md:-ml-1.5" />

                            <div className="ml-6 md:ml-0 md:w-1/2 md:px-6">
                                <Card className="bg-card/50 backdrop-blur">
                                    <CardHeader>
                                        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                                            <CardTitle className="text-lg font-bold">{job.title}</CardTitle>
                                            <Badge variant="secondary" className="w-fit whitespace-nowrap">{job.period}</Badge>
                                        </div>
                                        <CardDescription className="text-base font-medium text-primary">{job.company}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="mb-4 list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                                            {job.description.map((desc, i) => (
                                                <li key={i}>{desc}</li>
                                            ))}
                                        </ul>
                                        <div className="flex flex-wrap gap-2">
                                            {job.skills.map((skill) => (
                                                <Badge key={skill} variant="outline" className="text-xs">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
