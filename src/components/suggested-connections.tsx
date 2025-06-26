import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {Button} from "@/components/ui/button.tsx";
import {z} from "zod";


const Connection = z.object({
    id:z.number(),
    avatar:z.string(),
    name:z.string(),
    role:z.string()

})
interface Props{
    connection:z.infer<typeof Connection>
}
const SuggestedConnections = ({connection}:Props)=>{
    return (
        <div key={connection.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Avatar>
                    <AvatarImage src={connection.avatar || "/placeholder.svg"} alt={connection.name}/>
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
    )
}

export default  SuggestedConnections;