import { classNames } from "@/utils/utils"
import { useCallback, useState } from "react"
import { Slider } from "@mui/material"
import { useToothViewStore } from "../store/tooth-view-store"

const COLORS = [
  "#FF6969",
  "#37B7C3",
  "#50C878",
  "#FFB347",
  "#9370DB",
  "#FF69B4",
  "#4169E1",
  "#FF7F50",
  "#32CD32",
  "#BA55D3",
  "#FF4500",
  "#20B2AA",
]

export default function DrawTab() {
  const selectedColor = useToothViewStore(state => state.color)
  const setColor = useToothViewStore(state => state.setColor)
  const size = useToothViewStore(state => state.pencilSize)
  const setSize = useToothViewStore(state => state.setPencilSize)

  const handleSizeChange = useCallback((_: Event, value: number | number[]) => {
    setSize(value as number)
  }, [])

  return (
    <div>
      <div className="flex items-center gap-2 mx-2 mt-4">
        <div
          className="rounded-full bg-white"
          style={{ width: size, height: size }}
        />

        <Slider
          sx={{ color: "white" }}
          size="small"
          onChange={handleSizeChange}
          min={2}
          max={20}
          step={1}
          value={size}
        />
      </div>

      <div className="flex gap-3 flex-wrap justify-center my-4">
        {COLORS.map(color => {
          return (
            <button key={color} onClick={() => setColor(color)}>
              <div
                className={classNames(
                  "rounded-full w-5 h-5",
                  selectedColor === color ? "ring-1 ring-blue-500" : "",
                )}
                style={{ backgroundColor: color }}
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}
