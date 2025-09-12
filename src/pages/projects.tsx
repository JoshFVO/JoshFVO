import Navbar from "@/components/navbar";
import { Github, ExternalLink, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DetailedProjectCard } from "@/components/detailed-project-card";
import { useNavigate } from "react-router-dom";

const PROJECTS = [
    {
        title: "E-Commerce Web Application",
        description: "A full-stack e-commerce platform built with React and Node.js, featuring user authentication, product catalog, and payment integration.",
        longDescription: "This comprehensive e-commerce solution includes advanced features like real-time inventory management, order tracking, and an admin dashboard. The application handles complex state management and provides a seamless shopping experience across devices.",
        dates: "Mar 2024 - Jun 2024",
        tags: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
        image: "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NTc1Mzc4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        links: [
            {
                icon: <Github className="w-3 h-3" />,
                type: "Source",
                href: "#"
            },
            {
                icon: <ExternalLink className="w-3 h-3" />,
                type: "Live Demo",
                href: "#"
            }
        ],
        features: [
            "User authentication and authorization system",
            "Product catalog with search and filtering",
            "Shopping cart and checkout process",
            "Payment integration with Stripe",
            "Order management and tracking",
            "Admin dashboard for inventory management"
        ],
        techStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Stripe API", "Tailwind CSS"]
    },
    {
        title: "AI-Powered Image Classification",
        description: "Machine learning model using TensorFlow to classify images with 95% accuracy, deployed with a Flask API and React frontend.",
        longDescription: "Developed a convolutional neural network (CNN) for image classification using transfer learning with pre-trained models. The system includes data preprocessing, model training, evaluation, and deployment pipeline with comprehensive testing.",
        dates: "Jan 2024 - Mar 2024",
        tags: ["Python", "TensorFlow", "Flask", "React", "OpenCV"],
        image: "https://images.unsplash.com/photo-1655891709782-15c1303a2a25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDF8fHx8MTc1NzYyNjU2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        links: [
            {
                icon: <Github className="w-3 h-3" />,
                type: "Source",
                href: "#"
            },
            {
                icon: <Play className="w-3 h-3" />,
                type: "Demo",
                href: "#"
            }
        ],
        features: [
            "Custom CNN architecture with transfer learning",
            "Real-time image processing and classification",
            "RESTful API for model inference",
            "Interactive web interface for image upload",
            "Model performance monitoring and logging",
            "Batch processing capabilities"
        ],
        techStack: ["Python", "TensorFlow", "Keras", "Flask", "OpenCV", "NumPy", "Pandas", "React", "Axios"]
    },
    {
        title: "Mobile Fitness Tracker",
        description: "Cross-platform mobile app built with React Native for tracking workouts, nutrition, and fitness goals with offline capabilities.",
        longDescription: "A comprehensive fitness tracking application that helps users monitor their health journey. Features include workout planning, nutrition tracking, progress visualization, and social features to connect with friends and share achievements.",
        dates: "Sep 2023 - Dec 2023",
        tags: ["React Native", "Firebase", "Redux", "SQLite"],
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTc1Njg1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        links: [
            {
                icon: <Github className="w-3 h-3" />,
                type: "Source",
                href: "#"
            },
            {
                icon: <ExternalLink className="w-3 h-3" />,
                type: "App Store",
                href: "#"
            }
        ],
        features: [
            "Workout planning and tracking",
            "Nutrition and calorie monitoring",
            "Progress visualization with charts",
            "Offline data synchronization",
            "Social features and friend connections",
            "Custom exercise library and routines"
        ],
        techStack: ["React Native", "TypeScript", "Firebase", "Redux Toolkit", "SQLite", "React Navigation", "Victory Charts"]
    },
    {
        title: "Real-Time Analytics Dashboard",
        description: "Interactive dashboard for visualizing business metrics and KPIs with real-time data updates using WebSocket connections.",
        longDescription: "Built a comprehensive analytics platform that processes and visualizes large datasets in real-time. The dashboard provides customizable widgets, automated reports, and alerting systems for business intelligence and decision-making.",
        dates: "Jun 2023 - Aug 2023",
        tags: ["Vue.js", "D3.js", "WebSocket", "PostgreSQL", "Redis"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTc1NzI2ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        links: [
            {
                icon: <Github className="w-3 h-3" />,
                type: "Source",
                href: "#"
            },
            {
                icon: <ExternalLink className="w-3 h-3" />,
                type: "Live Demo",
                href: "#"
            }
        ],
        features: [
            "Real-time data visualization with WebSocket",
            "Customizable dashboard widgets",
            "Interactive charts and graphs",
            "Automated report generation",
            "Alert system for threshold monitoring",
            "Multi-user support with role-based access"
        ],
        techStack: ["Vue.js", "D3.js", "Chart.js", "WebSocket", "Node.js", "PostgreSQL", "Redis", "Docker"]
    }
];

export default function Projects() {
    const navigate = useNavigate();

    return (
        <div className="relative">
            <Navbar />
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

        </div>
    )
}