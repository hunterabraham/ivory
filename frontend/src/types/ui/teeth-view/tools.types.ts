export enum ToolType {
  PENCIL = "pencil",
  ERASER = "eraser",
  POINTER = "pointer",
}

export interface ToolOption {
  type: ToolType
  color?: string
}
