import { ThemeProvider } from "@/components/ui/theme-provider"
import AppRouter from "@/router";
import "./index.css"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="devconnect-theme">
      <AppRouter />
    </ThemeProvider>
  );
}

export default App
