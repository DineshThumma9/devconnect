"use client"


import PostCard from "@/components/post-card.tsx";
import ProjectCard from "@/components/project-card.tsx";
import SuggestedConnections from "@/components/suggested-connections.tsx";
import NewPost from "@/components/new-post.tsx";
import useConstants from "@/hooks/useConstants.ts";

export default function HomePage() {


    const {recentPosts, trendingProjects, suggestedConnections} = useConstants();


    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Create Post Button */}

            <NewPost/>

            {/* Recent Posts */}
            <section>
                <h2 className="text-2xl font-semibold mb-6">Recent Posts</h2>
                <div className="space-y-6">
                    {recentPosts.map((post) => (
                        <PostCard post={post}/>
                    ))}
                </div>
            </section>

            {/* Trending Projects */}
            <section>
                <h2 className="text-2xl font-semibold mb-6">Trending Projects</h2>
                <div className="space-y-6">
                    {trendingProjects.map((project) => (
                        <ProjectCard id={project.id} title={project.title} description={project.description}
                                     image={project.image}/>
                    ))}
                </div>
            </section>

            {/* Suggested Connections */}
            <section>
                <h2 className="text-2xl font-semibold mb-6">Suggested Connections</h2>
                <div className="bg-gray-900 rounded-lg p-6">
                    <div className="space-y-4">
                        {suggestedConnections.map((connection) => (
                            <SuggestedConnections connection={connection}/>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
