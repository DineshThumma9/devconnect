"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  tags?: string[]
  featured?: boolean
  onClick?: () => void
}

export  default function ProjectCard({ title, description, image, tags, featured, onClick }: ProjectCardProps) {
  return (
    <Card
      className="bg-gray-900 border-gray-700 hover:bg-gray-800 transition-colors cursor-pointer group"
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="aspect-video bg-gray-800 rounded-t-lg overflow-hidden">
          <img
            src={image || "/placeholder.svg?height=200&width=300"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-white text-sm line-clamp-2">{title}</h3>
            {featured && (
              <Badge variant="default" className="ml-2 text-xs">
                Featured
              </Badge>
            )}
          </div>
          <p className="text-gray-400 text-xs line-clamp-3 mb-3">{description}</p>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-gray-800 text-gray-300 text-xs">
                  {tag}
                </Badge>
              ))}
              {tags.length > 3 && (
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 text-xs">
                  +{tags.length - 3}
                </Badge>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
