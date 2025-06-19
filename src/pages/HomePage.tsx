"use client"

import type React from "react"
import { useState } from "react"
import { Heart, MessageSquare, Camera, Code, Link, Tag, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function HomePage() {
  const [isNewPostOpen, setIsNewPostOpen] = useState(false)
  const [newPost, setNewPost] = useState({
    content: "",
    image: null as File | null,
    tags: [] as string[],
    projectLink: "",
    codeSnippet: "",
  })
  const [newTag, setNewTag] = useState("")

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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setNewPost((prev) => ({ ...prev, image: file }))
    }
  }

  const addTag = () => {
    if (newTag.trim() && !newPost.tags.includes(newTag.trim())) {
      setNewPost((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()],
      }))
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setNewPost((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }))
  }

  const handleCreatePost = () => {
    console.log("Creating post:", newPost)
    setIsNewPostOpen(false)
    setNewPost({
      content: "",
      image: null,
      tags: [],
      projectLink: "",
      codeSnippet: "",
    })
  }

  return (
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Create Post Button */}
        <div className="bg-gray-900 rounded-lg p-4">
          <Dialog open={isNewPostOpen} onOpenChange={setIsNewPostOpen}>
            <DialogTrigger asChild>
              <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                <Send className="w-4 h-4 mr-2" />
                What's on your mind?
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create New Post</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                {/* Post Content */}
                <div>
                  <Label htmlFor="content">What's on your mind?</Label>
                  <Textarea
                      id="content"
                      placeholder="Share your thoughts, projects, or ask questions..."
                      value={newPost.content}
                      onChange={(e) => setNewPost((prev) => ({ ...prev, content: e.target.value }))}
                      className="bg-gray-800 border-gray-600 text-white min-h-[100px]"
                  />
                </div>

                {/* Image Upload */}
                <div>
                  <Label htmlFor="image">Upload Image</Label>
                  <div className="flex items-center gap-2">
                    <input id="image" type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => document.getElementById("image")?.click()}
                        className="border-gray-600 text-gray-300 hover:bg-gray-800"
                    >
                      <Camera className="w-4 h-4 mr-2" />
                      {newPost.image ? "Change Image" : "Add Image"}
                    </Button>
                    {newPost.image && <span className="text-sm text-gray-400">{newPost.image.name}</span>}
                  </div>
                </div>

                {/* Project Link */}
                <div>
                  <Label htmlFor="projectLink">Project Link (optional)</Label>
                  <div className="relative">
                    <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                        id="projectLink"
                        placeholder="https://github.com/username/project"
                        value={newPost.projectLink}
                        onChange={(e) => setNewPost((prev) => ({ ...prev, projectLink: e.target.value }))}
                        className="pl-10 bg-gray-800 border-gray-600 text-white"
                    />
                  </div>
                </div>

                {/* Code Snippet */}
                <div>
                  <Label htmlFor="codeSnippet">Code Snippet (optional)</Label>
                  <div className="relative">
                    <Code className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                    <Textarea
                        id="codeSnippet"
                        placeholder="// Share some code..."
                        value={newPost.codeSnippet}
                        onChange={(e) => setNewPost((prev) => ({ ...prev, codeSnippet: e.target.value }))}
                        className="pl-10 bg-gray-800 border-gray-600 text-white font-mono text-sm"
                    />
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <Label>Tags</Label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {newPost.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-gray-800 text-white">
                          {tag}
                          <button onClick={() => removeTag(tag)} className="ml-1 hover:text-red-400">
                            <X className="w-3 h-3" />
                          </button>
                        </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                        placeholder="Add a tag..."
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && addTag()}
                        className="bg-gray-800 border-gray-600 text-white"
                    />
                    <Button
                        type="button"
                        onClick={addTag}
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:bg-gray-800"
                    >
                      <Tag className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-2 pt-4">
                  <Button
                      variant="outline"
                      onClick={() => setIsNewPostOpen(false)}
                      className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  >
                    Cancel
                  </Button>
                  <Button
                      onClick={handleCreatePost}
                      disabled={!newPost.content.trim()}
                      className="bg-teal-600 hover:bg-teal-700 text-white"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Post
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Recent Posts */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Recent Posts</h2>
          <div className="space-y-6">
            {recentPosts.map((post) => (
                <div key={post.id} className="bg-gray-900 rounded-lg p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Avatar>
                      <AvatarImage src={post.avatar || "/placeholder.svg"} alt={post.author} />
                      <AvatarFallback>
                        {post.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">{post.author}</span>
                        <span className="text-gray-400 text-sm">{post.time}</span>
                      </div>
                      <p className="text-gray-300 mb-3">{post.content}</p>

                      {/* Tags */}
                      {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {post.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="bg-gray-800 text-gray-300 text-xs">
                                  #{tag}
                                </Badge>
                            ))}
                          </div>
                      )}

                      {/* Project Link */}
                      {post.projectLink && (
                          <div className="mb-3">
                            <a
                                href={post.projectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 text-sm"
                            >
                              <Link className="w-4 h-4" />
                              View Project
                            </a>
                          </div>
                      )}

                      {/* Code Snippet */}
                      {post.codeSnippet && (
                          <div className="mb-3">
                      <pre className="bg-gray-950 p-3 rounded text-sm overflow-x-auto">
                        <code className="text-green-400">{post.codeSnippet}</code>
                      </pre>
                          </div>
                      )}
                    </div>
                  </div>

                  {/* Post Image */}
                  {post.image && (
                      <div className="mb-4">
                        <img
                            src={post.image || "/placeholder.svg"}
                            alt="Post content"
                            className="w-full max-h-96 object-cover rounded-lg"
                        />
                      </div>
                  )}

                  {/* Interaction Buttons */}
                  <div className="flex items-center gap-6 pt-3 border-t border-gray-700">
                    <button className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                      <MessageSquare className="w-4 h-4" />
                      <span className="text-sm">{post.comments}</span>
                    </button>
                  </div>
                </div>
            ))}
          </div>
        </section>

        {/* Trending Projects */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Trending Projects</h2>
          <div className="space-y-6">
            {trendingProjects.map((project) => (
                <div key={project.id} className="bg-gray-900 rounded-lg p-6 flex gap-6">
                  <div className="flex-1">
                    <Badge variant={project.badgeVariant} className="mb-2">
                      {project.badge}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                  <div className="w-48 h-32 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                  </div>
                </div>
            ))}
          </div>
        </section>

        {/* Suggested Connections */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Suggested Connections</h2>
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="space-y-4">
              {suggestedConnections.map((connection) => (
                  <div key={connection.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={connection.avatar || "/placeholder.svg"} alt={connection.name} />
                        <AvatarFallback>
                          {connection.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{connection.name}</h4>
                        <p className="text-gray-400 text-sm">{connection.role}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                      Connect
                    </Button>
                  </div>
              ))}
            </div>
          </div>
        </section>
      </div>
  )
}
