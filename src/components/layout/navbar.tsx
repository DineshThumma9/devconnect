"use client"

import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useEffect } from "react"
import useAuthStore from "@/store/authStore"
import useInitStore from "@/store/initStore"
import { axiosInstance } from "@/api/apiClient"

export function Navbar() {
    const { accessToken } = useAuthStore()
    const {
        setProfilePic,
        setName,
        setUsername,
        user_email,
        name,
        username,
        profile_pic
    } = useInitStore()

    useEffect(() => {
        const fetchUser = async () => {
            try {
                if (accessToken) {
                    const res = await axiosInstance.get(`/get-user/${user_email}`, {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    })

                    const { name, username, profile_pic } = res.data
                    setName(name)
                    setUsername(username)
                    setProfilePic(profile_pic)
                }
            } catch (error) {
                console.error("Failed to fetch user info:", error)
            }
        }

        fetchUser()
    }, [accessToken, setName, setUsername, setProfilePic])

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-700 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
            <div className="flex h-16 items-center justify-between px-4 md:px-6">
                {/* Left */}
                <div className="flex items-center gap-3">
                    <div className="hidden sm:flex items-center gap-2">
                        <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-sm"></div>
                        </div>
                        <span className="text-xl font-semibold text-white">DevConnect</span>
                    </div>
                </div>

                {/* Center */}
                <div className="hidden md:flex flex-1 max-w-md mx-4">
                    <div className="relative w-full">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                            placeholder="Search..."
                            className="pl-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500"
                        />
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-3">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-300 hover:text-white relative"
                    >
                        <Bell className="h-5 w-5" />
                        <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-xs"></span>
                    </Button>

                    {/* Profile Menu */}
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                                <Avatar className="h-10 w-10">
                                    <AvatarImage src={profile_pic} alt="Profile" />
                                    <AvatarFallback className="bg-teal-600 text-white">
                                        {username?.[0]?.toUpperCase() || "U"}
                                    </AvatarFallback>
                                </Avatar>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent
                            className="w-56 bg-gray-800 border-gray-700"
                            align="end"
                        >
                            {/* Profile content here */}
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </header>
    )
}
