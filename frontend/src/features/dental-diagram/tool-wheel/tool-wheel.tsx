import ColorPicker from "./color-picker"

import { classNames } from "@/utils/utils"

export default function ToolWheel({ className }: { className?: string }) {
  return (
    <div className={classNames("flex items-center justify-center", className)}>
      <ColorPicker />
    </div>
  )
}
