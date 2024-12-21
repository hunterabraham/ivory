import CustomNavbar from "./header/header"
import { Outlet } from "react-router-dom"
import { fetchUserOrganizations } from "@/store/user-slice"
import { useEffect } from "react"
import { useAppDispatch } from "@/app/hooks"

export default function MainLayout() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUserOrganizations())
  }, [dispatch])

  return (
    <div className="flex w-full flex-col">
      <header>
        <CustomNavbar />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
