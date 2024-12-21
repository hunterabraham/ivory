import { useState } from "react"

import { useDispatch } from "react-redux"

import { setUser } from "@/store/user-slice"
import { MenuItem, MenuItems, MenuButton } from "@headlessui/react"
import { Menu } from "@headlessui/react"
import { useAppSelector } from "@/app/hooks"
import {
  ArrowLeftEndOnRectangleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid"

export default function UserButton() {
  const dispatch = useDispatch()
  const user = useAppSelector(state => state.user.user)

  const handleLogout = () => {
    dispatch(setUser(null))
  }

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex mt-2 top-24 w-52 text-right">
      <Menu>
        <MenuButton
          className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
          onClick={toggleMenu}
        >
          {user?.first_name}

          <ChevronDownIcon className="size-4 fill-white/60" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="mt-1 w-52 bg-gray-900 origin-top-right rounded-xl border border-gray-900 p-1 text-sm/6 bg-opacity-90 backdrop-blur-sm text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <button
              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
              onClick={handleLogout}
            >
              <ArrowLeftEndOnRectangleIcon className="size-4 fill-white/30" />
              Logout
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                ⌘D
              </kbd>
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  )
}
