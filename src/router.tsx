import { createBrowserRouter, RouterProvider } from "react-router-dom"
import {Layout} from "@/components/layout/layout"
import LoginPage from "@/pages/LoginPage"
import RegisterPage from "@/pages/RegisterPage"
import HomePage from "@/pages/HomePage"
import ProjectDetailsPage from "@/pages/ProjectDetailsPage"
import UserProfilePage from "@/pages/UserProfilePage"
import PublicRoute from "@/router/PublicRoute"
import PrivateRoute from "@/router/PrivateRoute"

const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> }
    ]
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        element: <Layout />,
        children: [
          { path: "/app", element: <HomePage /> },
          { path: "/project/:id", element: <ProjectDetailsPage /> },
          { path: "/profile/:id", element: <UserProfilePage /> }
        ]
      }
    ]
  }
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
