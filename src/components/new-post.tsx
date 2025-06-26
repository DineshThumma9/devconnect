import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Camera, Code, Link, Send, Tag, X} from "lucide-react";
import {Label} from "@/components/ui/label.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import React, {useState} from "react";



const NewPost = () => {

    const [isNewPostOpen, setIsNewPostOpen] = useState(false)
    const [newPost, setNewPost] = useState({
        content: "",
        image: null as File | null,
        tags: [] as string[],
        projectLink: "",
        codeSnippet: "",
    })
    const [newTag, setNewTag] = useState("")


    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setNewPost((prev) => ({...prev, image: file}))
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
        <div className="bg-gray-900 rounded-lg p-4">
            <Dialog open={isNewPostOpen} onOpenChange={setIsNewPostOpen}>
                <DialogTrigger asChild>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                        <Send className="w-4 h-4 mr-2"/>
                        What's on your mind?
                    </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Create New Post</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">


                        <div>
                            <Label htmlFor="content">What's on your mind?</Label>
                            <Textarea
                                id="content"
                                placeholder="Share your thoughts, projects, or ask questions..."
                                value={newPost.content}
                                onChange={(e) => setNewPost((prev) => ({...prev, content: e.target.value}))}
                                className="bg-gray-800 border-gray-600 text-white min-h-[100px]"
                            />
                        </div>

                        {/* Image Upload */}
                        <div>
                            <Label htmlFor="image">Upload Image</Label>
                            <div className="flex items-center gap-2">
                                <input id="image" type="file" accept="image/*" onChange={handleImageUpload}
                                       className="hidden"/>
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => document.getElementById("image")?.click()}
                                    className="border-gray-600 text-gray-300 hover:bg-gray-800"
                                >
                                    <Camera className="w-4 h-4 mr-2"/>
                                    {newPost.image ? "Change Image" : "Add Image"}
                                </Button>
                                {newPost.image && <span className="text-sm text-gray-400">{newPost.image.name}</span>}
                            </div>
                        </div>

                        {/* Project Link */}
                        <div>
                            <Label htmlFor="projectLink">Project Link (optional)</Label>
                            <div className="relative">
                                <Link
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"/>
                                <Input
                                    id="projectLink"
                                    placeholder="https://github.com/username/project"
                                    value={newPost.projectLink}
                                    onChange={(e) => setNewPost((prev) => ({...prev, projectLink: e.target.value}))}
                                    className="pl-10 bg-gray-800 border-gray-600 text-white"
                                />
                            </div>
                        </div>

                        {/* Code Snippet */}
                        <div>
                            <Label htmlFor="codeSnippet">Code Snippet (optional)</Label>
                            <div className="relative">
                                <Code className="absolute left-3 top-3 text-gray-400 w-4 h-4"/>
                                <Textarea
                                    id="codeSnippet"
                                    placeholder="// Share some code..."
                                    value={newPost.codeSnippet}
                                    onChange={(e) => setNewPost((prev) => ({...prev, codeSnippet: e.target.value}))}
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
                                            <X className="w-3 h-3"/>
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
                                    <Tag className="w-4 h-4"/>
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
                                <Send className="w-4 h-4 mr-2"/>
                                Post
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default NewPost;