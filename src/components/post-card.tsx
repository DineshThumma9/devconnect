import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Heart, Link, MessageSquare} from "lucide-react";
import {z} from "zod";

const Post = z.object({
    id: z.string(),
    avatar: z.string(),
    author: z.string(),
    time: z.string(),
    content: z.string(),
    tags: z.array(z.string()),
    codeSnippet: z.string(),
    projectLink: z.string(),
    image: z.string(),
    comments: z.string(),
    likes: z.string(),


})


interface Props {
    post: z.infer<typeof Post>
}

const PostCard = ({post}: Props) => {
    return (
        <div key={post.id} className="bg-gray-900 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
                <Avatar>
                    <AvatarImage src={post.avatar || "/placeholder.svg"} alt={post.author}/>
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
                                <Link className="w-4 h-4"/>
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
                    <Heart className="w-4 h-4"/>
                    <span className="text-sm">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                    <MessageSquare className="w-4 h-4"/>
                    <span className="text-sm">{post.comments}</span>
                </button>
            </div>
        </div>
    )
}

export default PostCard;