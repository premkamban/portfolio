"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-20 md:py-32">
            <div className="container relative z-10 mx-auto max-w-4xl px-4">
                {/* Text Content - Centered */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mx-auto max-w-3xl text-center"
                >
                    {/* Name/Title Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-6 inline-block"
                    >
                        <span className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                            AI Architect & Technical Leader
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        Architecting the Future of{" "}
                        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            AI & Web
                        </span>
                    </h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
                    >
                        I am <span className="font-semibold text-foreground">Prem Kamban</span>, an AI Architect transitioning from Solutions Architecture.
                        I build scalable, intelligent systems that bridge the gap between traditional web development and the new era of Generative AI.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Button size="lg" asChild className="text-base">
                            <Link href="#experience">
                                View Experience <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild className="text-base">
                            <Link href="#contact">Contact Me</Link>
                        </Button>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-16 flex flex-col items-center gap-2"
                    >
                        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            Scroll to explore
                        </span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="h-8 w-px bg-gradient-to-b from-primary to-transparent"
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Background Gradient/Glow - Enhanced */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-[120px]" />
            <div className="absolute top-1/3 right-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[100px]" />
        </section>
    )
}
