import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-gray-900 border-gray-700">
      <CardContent className="p-6">
        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-gray-300" />
        </div>
        <h3 className="text-white font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}
