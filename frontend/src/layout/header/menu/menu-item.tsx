import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react"

export default function MenuItem({
  title,
  subItems,
}: {
  title: string
  subItems: { title: string; description: string; link: string }[]
}) {
  return (
    <Popover className="flex items-center">
      <PopoverButton className="flex items-center gap-2 text-sm font-semibold text-gray-500 focus:outline-none data-[active]:text-gray-500 data-[hover]:text-gray-500 data-[focus]:outline-1 data-[focus]:outline-white">
        <p>{title}</p>
      </PopoverButton>

      <PopoverPanel
        transition
        anchor="bottom"
        className="mt-2 divide-y divide-gray-800 rounded-xl bg-gray-800 backdrop-blur-sm bg-opacity-90 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-trangray-y-1 data-[closed]:opacity-0"
      >
        <div className="p-3">
          {subItems.map(subItem => (
            <MenuSubItem key={subItem.title} {...subItem} />
          ))}
        </div>
      </PopoverPanel>
    </Popover>
  )
}

function MenuSubItem({
  title,
  description,
  link,
}: {
  title: string
  description: string
  link: string
}) {
  return (
    <a
      className="block rounded-lg py-2 px-3 transition hover:bg-gray-700"
      href={link}
    >
      <p className="font-semibold text-gray-200">{title}</p>
      <p className="text-gray-200/50">{description}</p>
    </a>
  )
}
