"use client"

import {useState} from "react"
import {Button} from "@/components/ui/button"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"

import useConstants from "@/hooks/useConstants.ts";
import ProjectCard from "@/components/project-card.tsx";

export default function UserProfilePage() {
    const [activeTab, setActiveTab] = useState("overview")

    const {userData, featuredProjects, allProjects} = useConstants();

    return (
        <div className="min-h-screen w-full bg-gray-950 text-white">

            <div className="w-full">
                {/* Profile Header */}
                <div className="bg-gray-900 px-6 py-12">
                    <div className="max-w-6xl mx-auto text-center">
                        <Avatar className="w-32 h-32 mx-auto mb-6">
                            <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={userData.name}/>
                            <AvatarFallback className="text-2xl">SC</AvatarFallback>
                        </Avatar>
                        <h1 className="text-3xl font-bold mb-2">{userData.name}</h1>
                        <p className="text-gray-400 mb-1">{userData.title}</p>
                        <p className="text-gray-400 text-sm mb-6">{userData.joinDate}</p>
                        <Button
                            className="bg-gray-800 hover:bg-gray-700">{userData.isFollowing ? "Following" : "Follow"}</Button>
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
