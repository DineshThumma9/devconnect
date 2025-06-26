import {AlertCircle, Code, Eye, Settings} from "lucide-react";


const useConstants = () => {

    const recentPosts = [
        {
            id: 1,
            author: "Alex Turner",
            avatar: "/placeholder.svg?height=40&width=40",
            time: "2d",
            content: "Just finished a new tutorial on building scalable APIs with Node.js. Check it out!",
            image: "/placeholder.svg?height=300&width=500",
            tags: ["Node.js", "API", "Tutorial"],
            likes: 12,
            comments: 2,
            projectLink: "https://github.com/alexturner/nodejs-api-tutorial",
        },
        {
            id: 2,
            author: "Sarah Chen",
            avatar: "/placeholder.svg?height=40&width=40",
            time: "3d",
            content:
                "Excited to announce the launch of my new open-source project, a library for data visualization in React!",
            image: "/placeholder.svg?height=250&width=400",
            tags: ["React", "Data Visualization", "Open Source"],
            likes: 25,
            comments: 1,
            codeSnippet: `import { Chart } from 'react-viz-lib';\n\n<Chart data={data} type="bar" />`,
        },
    ]

    const trendingProjects = [
        {
            id: 1,
            title: "AI-Powered Code Assistant",
            description: "An intelligent tool to help developers write code faster and more efficiently.",
            badge: "Featured",
            image: "/placeholder.svg?height=200&width=300",
            badgeVariant: "default" as const,
        },
        {
            id: 2,
            title: "Real-Time Collaboration Platform",
            description: "A platform for teams to collaborate on projects in real-time with integrated communication tools.",
            badge: "Popular",
            image: "/placeholder.svg?height=200&width=300",
            badgeVariant: "secondary" as const,
        },
    ]

    const suggestedConnections = [
        {
            id: 1,
            name: "Ethan Harper",
            role: "Software Engineer",
            avatar: "/placeholder.svg?height=40&width=40",
        },
        {
            id: 2,
            name: "Olivia Bennett",
            role: "Data Scientist",
            avatar: "/placeholder.svg?height=40&width=40",
        },
    ]

    const projectData = {
        id: "phoenix",
        name: "Project Phoenix",
        description: "Open Source Project",
        creator: "Alex Harper",
        image: "/placeholder.svg?height=200&width=200",
        overview: `Project Phoenix is an ambitious open-source initiative focused on creating a decentralized platform for collaborative software development. Our mission is to empower developers globally by offering a transparent, community-driven environment for building innovative solutions. We envision a future where developers can seamlessly collaborate on projects, share knowledge, and contribute to a vibrant ecosystem of open-source software.`,
    }

    const features = [
        {
            icon: Code,
            title: "Decentralized Collaboration",
            description: "Enable seamless collaboration among developers worldwide.",
        },
        {
            icon: Eye,
            title: "Community-Driven Development",
            description: "Foster a vibrant community where contributions are valued.",
        },
        {
            icon: Settings,
            title: "Secure and Transparent",
            description: "Ensure security and transparency in all project activities.",
        },
        {
            icon: AlertCircle,
            title: "Global Reach",
            description: "Connect developers from diverse backgrounds and locations.",
        },
    ]

    const teamMembers = [
        { id: "1", name: "Alex Harper", avatar: "/placeholder.svg?height=40&width=40" },
        { id: "2", name: "Sarah Chen", avatar: "/placeholder.svg?height=40&width=40" },
        { id: "3", name: "Mike Johnson", avatar: "/placeholder.svg?height=40&width=40" },
        { id: "4", name: "Emily Davis", avatar: "/placeholder.svg?height=40&width=40" },
        { id: "5", name: "David Wilson", avatar: "/placeholder.svg?height=40&width=40" },
    ]

    const activities = [
        { id: "1", title: "Project Phoenix Launched", date: "June 15, 2023", type: "launch" as const },
        { id: "2", title: "First Milestone Achieved", date: "July 20, 2023", type: "milestone" as const },
        { id: "3", title: "Community Meetup", date: "August 5, 2023", type: "meetup" as const },
    ]


    const userData = {
        name: "Sophia Chen",
        title: "Software Engineer at Tech Innovators",
        joinDate: "Joined in 2021",
        avatar: "/placeholder.svg?height=120&width=120",
        isFollowing: false,
    }

    const featuredProjects = [
        {
            id: "1",
            title: "Web App for Event Management",
            description: "A platform to organize and manage events with user authentication and real-time updates.",
            image: "/placeholder.svg?height=200&width=300",
            tags: ["React", "Node.js", "MongoDB"],
            featured: true,
        },
        {
            id: "2",
            title: "Mobile App for Fitness Tracking",
            description: "A fitness tracking app with personalized workout plans and progress tracking.",
            image: "/placeholder.svg?height=200&width=300",
            tags: ["React Native", "Firebase"],
            featured: true,
        },
        {
            id: "3",
            title: "Data Dashboard for Sales Analysis",
            description: "A dashboard to visualize sales data with interactive charts and filters.",
            image: "/placeholder.svg?height=200&width=300",
            tags: ["Vue.js", "D3.js", "Python"],
            featured: true,
        },
    ]

    const allProjects = [
        {
            id: "4",
            title: "E-commerce Website",
            description: "A full-featured e-commerce site with product listings, shopping cart, and payment integration.",
            image: "/placeholder.svg?height=200&width=300",
            tags: ["Next.js", "Stripe", "PostgreSQL"],
        },
        {
            id: "5",
            title: "Blog Platform",
            description: "A blog platform with user authentication, post creation, and commenting features.",
            image: "/placeholder.svg?height=200&width=300",
            tags: ["Django", "PostgreSQL"],
        },
        {
            id: "6",
            title: "Task Management App",
            description: "A task management application with project boards, task assignments, and deadlines.",
            image: "/placeholder.svg?height=200&width=300",
            tags: ["Angular", "Express", "MongoDB"],
        },
        {
            id: "7",
            title: "Portfolio Website",
            description: "A personal portfolio website showcasing projects, skills, and contact information.",
            image: "/placeholder.svg?height=200&width=300",
            tags: ["HTML", "CSS", "JavaScript"],
        },
        {
            id: "8",
            title: "Social Media App",
            description: "A social media app with user profiles, posts, and real-time notifications.",
            image: "/placeholder.svg?height=200&width=300",
            tags: ["React", "Socket.io", "Redis"],
        },
        {
            id: "9",
            title: "Recipe App",
            description: "A recipe app with search functionality, user-submitted recipes, and cooking instructions.",
            image: "/placeholder.svg?height=200&width=300",
            tags: ["Flutter", "Firebase"],
        },
    ]

    return { recentPosts, trendingProjects, suggestedConnections,activities,teamMembers,features,projectData,allProjects,featuredProjects,userData }

}

export default  useConstants;