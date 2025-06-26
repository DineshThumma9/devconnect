"use client"

import { useState } from "react"
import { Navbar } from "./navbar"
import { Sidebar } from "./sidebar"
import { Outlet } from "react-router-dom"

export function Layout() {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed)
    }

    return (
        <div className="min-h-screen bg-gray-950 text-white p-0">
            <Navbar />
            <div className="flex h-[calc(100vh-4rem)]">
                <Sidebar isCollapsed={isSidebarCollapsed} onToggle={toggleSidebar} />
                <main className="flex-1 overflow-y-auto">
                    <div className="p-6">
                        <Outlet /> {/* renders nested child route */}
                    </div>
                </main>
            </div>
        </div>
    )
}
