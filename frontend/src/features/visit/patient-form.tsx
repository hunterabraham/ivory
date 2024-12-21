import Form from "@/components/forms/Form"
import { FormFieldType } from "@/types/ui/components/forms/fields.types"
import { PatientFormValues } from "@/types/ui/components/forms/patient-form.types"
import * as Yup from "yup"

export default function PatientForm({
  patient,
}: {
  patient: PatientFormValues
}) {
  return (
    <Form
      fields={[
        {
          name: "firstName",
          label: "First Name",
          type: "text",
          fieldType: FormFieldType.TEXT,
        },
        {
          name: "lastName",
          label: "Last Name",
          type: "text",
          fieldType: FormFieldType.TEXT,
        },
      ]}
      initialValues={{}}
      validationSchema={Yup.object({
        name: Yup.string().required("Name is required"),
      })}
      onSubmit={() => {}}
      submitText="Submit"
    />
  )
}
