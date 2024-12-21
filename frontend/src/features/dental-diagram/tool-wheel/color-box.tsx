import { classNames } from "@/utils/utils"

export default function ColorBox({
  onSelect,
  children,
}: {
  onSelect: (color: string) => void
  children: React.ReactNode
}) {
  return (
    <div
      className={classNames(
        "rounded-xl h-56 w-56 border border-slate-900 bg-gray-900 text-white",
        "absolute mt-2 left-1/2 -translate-x-1/2 p-3",
      )}
    >
      <div
        className={classNames(
          "absolute top-0 -translate-y-1.5 left-1/2 -translate-x-1/2 border-b-[8px] border-b-slate-900 w-0 h-0",
          "border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent",
        )}
      />

      {children}
    </div>
  )
}
