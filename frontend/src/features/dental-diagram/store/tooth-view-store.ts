import { create } from "zustand"
import { ToolType } from "@/types/ui/teeth-view/tools.types"

export interface TeethViewStore {
  color: string
  pencilSize: number
  eraserSize: number
  tool: ToolType
  setColor: (color: string) => void
  setPencilSize: (size: number) => void
  setEraserSize: (size: number) => void
  setTool: (tool: ToolType) => void
}

export const useToothViewStore = create<TeethViewStore>()(set => ({
  color: "#FF6969",
  pencilSize: 4,
  eraserSize: 12,
  tool: ToolType.PENCIL,
  setColor: (color: string) => set({ color }),
  setPencilSize: (size: number) => set({ pencilSize: size }),
  setEraserSize: (size: number) => set({ eraserSize: size }),
  setTool: (tool: ToolType) => set({ tool }),
}))
