import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/ui/theme-provider"
import HomePage from "@/pages/HomePage"
import ProjectDetailsPage from "@/pages/ProjectDetailsPage"
import UserProfilePage from "@/pages/UserProfilePage"
import "./index.css"
import LoginPage from "@/pages/LoginPage.tsx";
import RegisterPage from "@/pages/RegisterPage.tsx";
import {Layout} from "@/components/layout/layout";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="devconnect-theme">
      <Router>
        <Layout>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<RegisterPage />} />
            <Route path="/project/:id" element={<ProjectDetailsPage />} />
            <Route path="/profile/:id" element={<UserProfilePage />} />
          </Routes>

        </Layout>
      </Router>



    </ThemeProvider>
  )
}

export default App
