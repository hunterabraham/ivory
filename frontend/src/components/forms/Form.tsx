import { useFormik } from "formik"

import * as Yup from "yup"
import Field from "./Field"
import { FormField } from "@/types/ui/components/forms/fields.types"
import Button from "../button/button"

export default function Form({
  fields,
  initialValues,
  validationSchema,
  submitText,
  onSubmit,
}: {
  fields: FormField[]
  initialValues: Record<string, string | number>
  validationSchema: Yup.ObjectSchema<Record<string, string | number>>
  onSubmit: (values: Record<string, string | number>) => void
  submitText: string
}) {
  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit,
  })

  return (
    <div className="flex flex-col gap-4">
      {fields.map(field => {
        return <Field field={field} formik={formik} />
      })}

      <Button onClick={formik.handleSubmit as unknown as () => void}>
        {submitText}
      </Button>
    </div>
  )
}
