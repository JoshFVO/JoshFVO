import Navbar from "@/components/navbar";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DetailedProjectCard } from "@/components/detailed-project-card";
import { useNavigate } from "react-router-dom";
import { BlurFade } from "@/components/magicui/blur-fade";



const PROJECTS = [
    {
        title: "Romona’s Home Care - iOS Application",
        description: "A full-featured iOS app for home care management with scheduling, employee management, and geofenced clock-in.",
        longDescription: "Architected and developed a production-grade iOS application using SwiftUI and Firebase (Firestore, Storage, Auth), comprising over 70 Swift files across five core modules—Scheduling, Residents, Employees, Financials, and Clock-In—with role-based authentication and dual user interfaces. Implemented protocol-based service layers managing over 90 database operations, parallel data fetching with Swift’s TaskGroup API, and a hierarchical Firestore schema optimized for query performance. Added geofenced clock-in via MapKit and centralized OSLog error handling.",
        dates: "July 2025 – October 2025",
        tags: ["SwiftUI", "Firebase", "MapKit", "CoreLocation", "iOS"],
        image: "",
        links: [
            // {
            //     icon: <Github className="w-3 h-3" />,
            //     type: "Source",
            //     href: "https://github.com/JoshFVO"
            // },
            {
                icon: <ExternalLink className="w-3 h-3" />,
                type: "App Site",
                href: "https://romonashomecare.com/app-support"
            }
        ],
        features: [
            "Five core modules: Scheduling, Residents, Employees, Financials, Clock-In",
            "Role-based authentication and dual UIs",
            "Service layer with 90+ async database operations",
            "Parallel data fetching with Swift TaskGroup",
            "Hierarchical Firestore structure for efficient queries",
            "Geofenced clock-in with MapKit (100m radius)",
            "Centralized error handling with OSLog"
        ],
        techStack: ["Swift", "SwiftUI", "Firebase Firestore", "Firebase Auth", "MapKit", "CoreLocation", "OSLog"]
    },
    {
        title: "Referred.fyi - Referral Marketplace Platform",
        description: "A full-stack referral marketplace web app built with React, TypeScript, and AWS Amplify Gen 2.",
        longDescription: "Architected and developed a full-stack referral marketplace enabling job posting, referral management, messaging, and payments. Built using React, TypeScript, AWS Amplify (Gen 2), and Stripe, with 193+ TypeScript/TSX files and eight core features. Implemented service-oriented backend with AWS Lambda functions for Stripe payments, email automation, OpenAI resume parsing, and more. Designed GraphQL schema with 15+ interconnected models, multi-tenant authorization, and responsive analytics dashboards with Tailwind and shadcn/ui components.",
        dates: "July 2024 – July 2025",
        tags: ["React", "TypeScript", "AWS Amplify", "Stripe", "GraphQL"],
        image: "",
        links: [
            // {
            //     icon: <Github className="w-3 h-3" />,
            //     type: "Source",
            //     href: "https://github.com/JoshFVO"
            // },
            {
                icon: <ExternalLink className="w-3 h-3" />,
                type: "Live Site",
                href: "https://referred.fyi"
            }
        ],
        features: [
            "Eight core features: Job Posting, Messaging, Payments, Analytics, and more",
            "AWS Lambda backend with 9+ functions (Stripe, SES, OpenAI, Calendly OAuth)",
            "GraphQL data layer with 15+ interconnected models",
            "Stripe Connect for dual-sided marketplace payments",
            "Role-based multi-tenant company support",
            "Component library with 112+ React components",
            "Real-time messaging and analytics dashboard"
        ],
        techStack: ["React", "TypeScript", "AWS Amplify Gen 2", "Stripe", "GraphQL", "TailwindCSS", "Radix UI", "shadcn/ui"]
    },
    {
        title: "AWS Image Processing System",
        description: "An AWS Lambda-based system for user-specific image processing using Python.",
        longDescription: "Built an AWS Lambda image processing pipeline using Python’s Pillow library for on-demand image resizing, reformatting, and flipping. Designed event-driven architecture integrating S3 and Lambda to automatically trigger functions upon user uploads. Tested all endpoints using Postman to verify system reliability and API response integrity.",
        dates: "September 2023 – December 2023",
        tags: ["Python", "AWS Lambda", "S3", "Pillow"],
        image: "",
        links: [
            // {
            //     icon: <Github className="w-3 h-3" />,
            //     type: "Source",
            //     href: "https://github.com/JoshFVO"
            // },
            // {
            //     icon: <ExternalLink className="w-3 h-3" />,
            //     type: "Demo",
            //     href: "#"
            // }
        ],
        features: [
            "Lambda functions for image resizing, reformatting, and flipping",
            "Event-driven architecture triggered by S3 uploads",
            "Efficient image handling using Pillow",
            "API tested with Postman"
        ],
        techStack: ["Python", "AWS Lambda", "S3", "Pillow", "Postman"]
    },
    {
        title: "Asteroids Game",
        description: "A classic Asteroids game recreation programmed entirely in ARM Assembly.",
        longDescription: "Recreated the classic Asteroids game using ARM Assembly on an Altera DE1-SoC, optimized for ARMv7 architecture. Implemented pixel-perfect collision detection, physics-based movement, and efficient rendering to ensure smooth gameplay under resource constraints. Showcased strong understanding of low-level programming and hardware-optimized algorithms.",
        dates: "January 2022 – March 2022",
        tags: ["ARM Assembly", "Game Development", "Embedded Systems"],
        image: "",
        links: [
            // {
            //     icon: <Github className="w-3 h-3" />,
            //     type: "Source",
            //     href: "https://github.com/JoshFVO"
            // },
            // {
            //     icon: <Play className="w-3 h-3" />,
            //     type: "Demo",
            //     href: "#"
            // }
        ],
        features: [
            "ARM Assembly implementation for ARMv7 architecture",
            "Pixel-perfect collision detection",
            "Physics-based movement",
            "Optimized rendering for embedded hardware"
        ],
        techStack: ["ARM Assembly", "C", "Altera DE1-SoC"]
    }
];

export default function Projects() {
    const navigate = useNavigate();

    return (
        <div className="relative">
            <Navbar />
            <BlurFade>
                <div className="max-w-[1200px] mx-auto px-6 py-16">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <Badge className="text-[14px] font-[300] bg-black text-white mb-4">
                            Projects
                        </Badge>
                        <h1 className="text-[48px] font-[600] mb-4">
                            My Computer Science Projects
                        </h1>
                        <p className="text-[18px] text-gray-500 font-[300] max-w-[672px] mx-auto">
                            Here's a detailed look at some of my favorite projects I've built, ranging from web applications
                            to machine learning models and mobile apps. Each project showcases different technical skills and problem-solving approaches.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="space-y-12">
                        {PROJECTS.map((project) => (
                            <DetailedProjectCard
                                key={project.title}
                                title={project.title}
                                description={project.description}
                                longDescription={project.longDescription}
                                dates={project.dates}
                                tags={project.tags}
                                image={project.image}
                                links={project.links}
                                features={project.features}
                                techStack={project.techStack}
                            />
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-16 pt-16 border-t border-gray-200">
                        <h2 className="text-[32px] font-[600] mb-4">
                            Interested in collaborating?
                        </h2>
                        <p className="text-[18px] text-gray-500 font-[300] mb-8 max-w-[600px] mx-auto">
                            I'm always open to discussing new opportunities, interesting projects,
                            or just having a conversation about technology and development.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => navigate('/contact')}
                                className="px-8 py-3 bg-black text-white rounded-lg text-[16px] font-[500] hover:bg-gray-800 transition-colors"
                            >
                                Get in Touch
                            </button>
                            <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg text-[16px] font-[500] hover:bg-gray-50 transition-colors">
                                View Resume
                            </button>
                        </div>
                    </div>
                </div>
            </BlurFade>
        </div>
    )
}