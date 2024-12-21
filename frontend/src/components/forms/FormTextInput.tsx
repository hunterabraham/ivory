import { InputFormField } from "@/types/ui/components/forms/fields.types"
import { classNames } from "@/utils/utils"
import { Field, Input, Label } from "@headlessui/react"
import { FormikProps } from "formik"

export default function FormTextInput({
  field,
  formik,
}: {
  field: InputFormField

  formik: FormikProps<any>
}) {
  return (
    <Field>
      <Label className="text-sm/6 font-medium text-gray-900">
        {field.label}
      </Label>

      <Input
        {...field}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={classNames(
          "border border-gray-100 rounded-md focus:border-gray-900 transition-colors ease-in-out w-full py-1.5 px-2 text-sm text-gray-900 outline-none",
          formik.touched[field.name] && formik.errors[field.name]
            ? "border-red-500"
            : "border-gray-300",
        )}
      />
      {formik.touched[field.name] && formik.errors[field.name] ? (
        <p className="text-red-500 text-small mt-2 flex items-center gap-1 font-normal">
          {formik.errors[field.name]?.toString()}
        </p>
      ) : null}
    </Field>
  )
}
