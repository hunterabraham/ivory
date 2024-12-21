import FormTextInput from "./FormTextInput"
import { FormikProps } from "formik"
import FormComboBox from "./FormComboBox"
import {
  FormField,
  FormFieldType,
} from "@/types/ui/components/forms/fields.types"

export default function Field({
  field,
  formik,
}: {
  field: FormField
  formik: FormikProps<any>
}) {
  switch (field.fieldType) {
    case FormFieldType.TEXT:
      return <FormTextInput field={field} formik={formik} />
    case FormFieldType.COMBOBOX:
      return <FormComboBox field={field} formik={formik} />
  }
}
