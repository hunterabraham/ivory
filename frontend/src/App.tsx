import "./App.css"
import { RouterProvider } from "react-router-dom"
import router from "./layout/router"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { QueryClient, QueryClientProvider } from "react-query"
const queryClient = new QueryClient()

function App() {
  return (
    <div className="flex w-full">
      <QueryClientProvider client={queryClient}>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <RouterProvider router={router} />
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </div>
  )
}

export default App
