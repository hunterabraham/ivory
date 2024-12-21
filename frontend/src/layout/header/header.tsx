import appLogo from "@/assets/app-logo.png"
import Menu from "./menu/menu"
import UserButton from "@/components/user/user-button"

export default function Header() {
  return (
    <div className="flex items-center w-full justify-center  gap-8">
      <img src={appLogo} alt="logo" className="w-16 h-10" />
      <Menu />
      <UserButton />
    </div>
  )
}
