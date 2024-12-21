import { classNames } from "@/utils/utils"
import { AnimatePresence, motion } from "framer-motion"
import DrawTab from "./draw-tab"
import EraseTab from "./erase-tab"
import { useToothViewStore } from "../store/tooth-view-store"
import { ToolType } from "@/types/ui/teeth-view/tools.types"

const tools = [
  { id: ToolType.PENCIL, label: "Draw" },
  { id: ToolType.ERASER, label: "Erase" },
]

export default function ToolSelector() {
  const selectedTool = useToothViewStore(state => state.tool)
  const setTool = useToothViewStore(state => state.setTool)

  return (
    <div>
      <div className="flex gap-2">
        {tools.map(tool => (
          <div
            key={tool.id}
            className="relative h-7 w-16 flex justify-center items-center"
          >
            <button
              className={classNames(
                "text-xs transition-colors",
                selectedTool === tool.id ? "text-slate-100" : "text-slate-600",
              )}
              onClick={() => setTool(tool.id)}
            >
              {tool.label}
            </button>

            {selectedTool === tool.id && (
              <motion.div
                className="absolute top-0 left-0 w-full h-full border border-slate-700 bg-slate-800 -z-10 rounded-lg"
                transition={{ type: "spring", duration: 0.3, bounce: 0.3 }}
                layoutId="underline"
              />
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selectedTool === ToolType.PENCIL ? (
          <motion.div
            key="pencil"
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.2, type: "spring", bounce: 0.3 }}
          >
            <DrawTab />
          </motion.div>
        ) : null}

        {selectedTool === ToolType.ERASER ? (
          <motion.div
            key="eraser"
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.2, type: "spring", bounce: 0.3 }}
          >
            <EraseTab />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
