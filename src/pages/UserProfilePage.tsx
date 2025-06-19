"use client"

import { useState } from "react"
import { ArrowLeft, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/project-card"

export default function UserProfilePage() {
  const [activeTab, setActiveTab] = useState("overview")

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

  return (
    <div className="min-h-screen w-full bg-gray-950 text-white">

      <div className="w-full">
        {/* Profile Header */}
        <div className="bg-gray-900 px-6 py-12">
          <div className="max-w-6xl mx-auto text-center">
            <Avatar className="w-32 h-32 mx-auto mb-6">
              <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={userData.name} />
              <AvatarFallback className="text-2xl">SC</AvatarFallback>
            </Avatar>
            <h1 className="text-3xl font-bold mb-2">{userData.name}</h1>
            <p className="text-gray-400 mb-1">{userData.title}</p>
            <p className="text-gray-400 text-sm mb-6">{userData.joinDate}</p>
            <Button className="bg-gray-800 hover:bg-gray-700">{userData.isFollowing ? "Following" : "Follow"}</Button>
          </div>
        </div>

        {/* Profile Content */}
        <div className="max-w-6xl mx-auto px-6 py-8">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-gray-900 border-gray-700 mb-8">
              <TabsTrigger value="overview" className="data-[state=active]:bg-gray-800">
                Overview
              </TabsTrigger>
              <TabsTrigger value="projects" className="data-[state=active]:bg-gray-800">
                Projects
              </TabsTrigger>
              <TabsTrigger value="skills" className="data-[state=active]:bg-gray-800">
                Skills
              </TabsTrigger>
              <TabsTrigger value="activity" className="data-[state=active]:bg-gray-800">
                Activity
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              {/* Featured Projects */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredProjects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                  ))}
                </div>
              </div>

              {/* All Projects */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">All Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {allProjects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="projects">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...featuredProjects, ...allProjects].map((project) => (
                  <ProjectCard key={project.id} {...project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="skills">
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
                <p className="text-gray-400">Skills and technologies would be displayed here.</p>
              </div>
            </TabsContent>

            <TabsContent value="activity">
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
                <p className="text-gray-400">User activity timeline would be displayed here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
