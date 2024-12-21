import { Slider } from "@mui/material"
import { useToothViewStore } from "../store/tooth-view-store"

export default function EraseTab() {
  const size = useToothViewStore(state => state.eraserSize)
  const setSize = useToothViewStore(state => state.setEraserSize)

  return (
    <div className="flex flex-row items-center gap-2 my-4 mx-2">
      <div
        className="flex rounded-full bg-white"
        style={{ width: size, height: size }}
      />

      <Slider
        className="flex"
        value={size}
        onChange={(_, value) => setSize(value as number)}
        sx={{ color: "white" }}
        size="small"
        min={2}
        max={20}
        step={1}
      />
    </div>
  )
}
