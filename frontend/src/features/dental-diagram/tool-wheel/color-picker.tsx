import MotionButton from "@/components/button/motion-button"
import { useState } from "react"
import ColorBox from "./color-box"
import { motion } from "framer-motion"
import ToolSelector from "./tool-selector"
import { useToothViewStore } from "../store/tooth-view-store"

export default function ColorPicker() {
  const [openColorPicker, setOpenColorPicker] = useState(false)
  const color = useToothViewStore(state => state.color)
  const setColor = useToothViewStore(state => state.setColor)

  return (
    <div>
      <MotionButton onClick={() => setOpenColorPicker(!openColorPicker)}>
        <div
          className="rounded-full w-10 h-10"
          style={{ backgroundColor: color }}
        />
      </MotionButton>

      {openColorPicker && (
        <motion.div
          transition={{ type: "spring", duration: 0.3, bounce: 0.3 }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
        >
          <ColorBox onSelect={setColor}>
            <ToolSelector />
          </ColorBox>
        </motion.div>
      )}
    </div>
  )
}
