import { ComboboxFormField } from "@/types/ui/components/forms/fields.types"
import { Combobox } from "@headlessui/react"
import { FormikProps } from "formik"

export default function FormComboBox({
  field,
  formik,
}: {
  field: ComboboxFormField
  formik: FormikProps<any>
}) {
  return (
    <Combobox
      value={formik.values[field.name]}
      onChange={value => formik.setFieldValue(field.name, value)}
    />
  )
}
