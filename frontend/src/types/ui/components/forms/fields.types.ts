import * as Yup from "yup"
import { ComboboxItem } from "./combobox.types"

export enum FormFieldType {
  TEXT = "text",
  SELECT = "select",
  COMBOBOX = "combobox",
  DATE = "date",
}

export type FormField = ComboboxFormField | SelectFormField | InputFormField

type FormFieldBase = {
  name: string
  label: string
  validation?: Yup.Schema<any>
}

export type ComboboxFormField = FormFieldBase & {
  fieldType: FormFieldType.COMBOBOX
  items: ComboboxItem[]
}

export type SelectFormField = FormFieldBase & {
  fieldType: FormFieldType.SELECT
  options: {
    label: string
    value: string
  }[]
}

export type InputFormField = FormFieldBase & {
  fieldType: FormFieldType.TEXT
  type: string
}

export type DateFormField = FormFieldBase & {
  fieldType: FormFieldType.DATE
}
