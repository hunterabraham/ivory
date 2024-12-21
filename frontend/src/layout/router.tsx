import { createBrowserRouter } from "react-router-dom"
import MainLayout from "./main-layout"
import LoginPage from "../pages/login/login-page"
import VisitPage from "../pages/visit/visit-page"
import OrganizationSelect from "@/pages/login/organization-select"
import Home from "@/pages/Home"
import NewVisitPage from "@/pages/visit/new-visit-page"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "visit",
        element: <NewVisitPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/organization-select",
    element: <OrganizationSelect />,
  },
])

export default router
