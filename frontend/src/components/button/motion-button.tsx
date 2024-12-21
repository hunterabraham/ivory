import { classNames } from "@/utils/utils"
import { motion } from "framer-motion"

export default function MotionButton({
  onClick,
  label,
  children,
}: {
  onClick: () => void
  label?: string
  children?: React.ReactNode
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      className={classNames(
        "text-sm font-medium, rounded-full border relative transition-colors duration-75 text-gray-500",
      )}
    >
      {label ? label : children}
    </motion.button>
  )
}
