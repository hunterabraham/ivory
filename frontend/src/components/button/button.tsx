import { classNames } from "@/utils/utils"
import { Button as HeadlessButton } from "@headlessui/react"

export default function Button({
  onClick,
  children,
}: {
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <HeadlessButton
      onClick={onClick}
      className={classNames(
        "inline-flex items-center gap-2 rounded-md bg-slate-800 py-1.5 px-3",
        "text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-slate-700 data-[open]:bg-slate-700 data-[focus]:outline-1 data-[focus]:outline-white",
        "transition-colors duration-100 ease-in-out text-center justify-center",
      )}
    >
      {children}
    </HeadlessButton>
  )
}
