"use client"

import {useState} from "react"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {FeatureCard} from "@/components/feature-card"
import {ActivityTimeline} from "@/components/activity-timeline"
import {TeamAvatars} from "@/components/team-avatars"
import useConstants from "@/hooks/useConstants.ts";

export default function ProjectDetailsPage() {
    const [activeTab, setActiveTab] = useState("overview")

    const {projectData, teamMembers, activities, features} = useConstants()

    return (
        <div className="min-h-screen w-full bg-gray-950 text-white ">
            <div className="flex h-[calc(100vh-73px)]">
                {/* Sidebar */}
                <div className="w-80 bg-gray-900 h-full p-6 flex-shrink-0 overflow-y-auto">
                    {/* Project Info */}
                    <div className="mb-8">
                        <div
                            className="w-32 h-32 bg-orange-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                            <div className="w-16 h-16 bg-orange-400 rounded-full opacity-80"></div>
                        </div>
                        <h1 className="text-2xl font-bold mb-2">{projectData.name}</h1>
                        <p className="text-gray-400 mb-1">{projectData.description}</p>
                        <p className="text-gray-500 text-sm">Created by {projectData.creator}</p>
                    </div>

                    {/* About */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-3">About</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Project Phoenix is an open-source initiative aimed at developing a decentralized platform
                            for
                            collaborative software development. Our goal is to empower developers worldwide by providing
                            a transparent
                            and community-driven environment for building innovative solutions.
                        </p>
                    </div>

                    {/* Team */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-3">Team</h3>
                        <TeamAvatars members={teamMembers}/>
                    </div>

                    {/* Activity */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Activity</h3>
                        <ActivityTimeline activities={activities} compact/>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 overflow-y-auto">
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold mb-4">{projectData.name}</h1>
                        <Tabs value={activeTab} onValueChange={setActiveTab}>
                            <TabsList className="bg-gray-900 border-gray-700">
                                <TabsTrigger value="overview" className="data-[state=active]:bg-gray-800">
                                    Overview
                                </TabsTrigger>
                                <TabsTrigger value="code" className="data-[state=active]:bg-gray-800">
                                    Code
                                </TabsTrigger>
                                <TabsTrigger value="issues" className="data-[state=active]:bg-gray-800">
                                    Issues
                                </TabsTrigger>
                                <TabsTrigger value="settings" className="data-[state=active]:bg-gray-800">
                                    Settings
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview" className="mt-6">
                                {/* Project Overview */}
                                <div className="mb-8">
                                    <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                                    <p className="text-gray-300 leading-relaxed">{projectData.overview}</p>
                                </div>

                                {/* Key Features */}
                                <div className="mb-8">
                                    <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {features.map((feature, index) => (
                                            <FeatureCard
                                                key={index}
                                                icon={feature.icon}
                                                title={feature.title}
                                                description={feature.description}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Recent Activity */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-6">Recent Activity</h2>
                                    <div className="bg-gray-900 rounded-lg p-6">
                                        <ActivityTimeline activities={activities}/>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="code" className="mt-6">
                                <div className="bg-gray-900 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold mb-4">Code Repository</h3>
                                    <p className="text-gray-400">Code repository content would be displayed here.</p>
                                </div>
                            </TabsContent>

                            <TabsContent value="issues" className="mt-6">
                                <div className="bg-gray-900 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold mb-4">Issues</h3>
                                    <p className="text-gray-400">Project issues would be displayed here.</p>
                                </div>
                            </TabsContent>

                            <TabsContent value="settings" className="mt-6">
                                <div className="bg-gray-900 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold mb-4">Project Settings</h3>
                                    <p className="text-gray-400">Project settings would be displayed here.</p>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}
