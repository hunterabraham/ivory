// components/SketchCanvas.js
import { ToolOption, ToolType } from "@/types/ui/teeth-view/tools.types"
import { useEffect, useRef } from "react"
import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas"
import { useToothViewStore } from "./store/tooth-view-store"

export default function Tooth({ src }: { src: string }) {
  const color = useToothViewStore(state => state.color)
  const tool = useToothViewStore(state => state.tool)
  const canvas = useRef<ReactSketchCanvasRef>(null)
  const pencilSize = useToothViewStore(state => state.pencilSize)
  const eraserSize = useToothViewStore(state => state.eraserSize)

  useEffect(() => {
    if (canvas.current) {
      canvas.current.eraseMode(tool === ToolType.ERASER)
    }
  }, [tool])

  return (
    <div className="flex w-1/16">
      <ReactSketchCanvas
        id={`canvas-${src}`}
        className="border-none"
        ref={canvas}
        strokeWidth={pencilSize}
        eraserWidth={eraserSize}
        strokeColor={color}
        backgroundImage={src}
        style={{ border: "none" }}
      />
    </div>
  )
}
