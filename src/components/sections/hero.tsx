"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-20 md:py-32">
            <div className="container relative z-10 grid gap-12 md:grid-cols-2 md:items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center md:text-left"
                >
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        Architecting the Future of <br className="hidden sm:inline" />
                        <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                            AI & Web
                        </span>
                    </h1>

                    <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                        I am Prem Kamban, an AI Architect transitioning from Solutions Architecture.
                        I build scalable, intelligent systems that bridge the gap between traditional web development and the new era of Generative AI.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4 md:justify-start">
                        <Button size="lg" asChild>
                            <Link href="#experience">
                                View Experience <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <Link href="#contact">Contact Me</Link>
                        </Button>
                    </div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative mx-auto aspect-[3/4] w-full max-w-[400px] overflow-hidden rounded-2xl border-4 border-indigo-500/20 bg-muted shadow-2xl md:mx-0 md:ml-auto"
                >
                    <Image
                        src="/profile.png"
                        alt="Prem Kamban"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Overlay gradient for better text contrast if needed, or just style */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
            </div>

            {/* Background Gradient/Glow */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-[100px]" />
        </section>
    )
}
