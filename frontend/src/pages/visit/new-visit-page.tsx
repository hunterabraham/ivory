import Combobox from "@/components/forms/Combobox"
import { useQuery } from "react-query"
import PatientService from "@/services/patient-service"
import { Skeleton } from "@mui/material"
import { useState } from "react"
import { Patient } from "@/types/patient.types"
import { Field, Label } from "@headlessui/react"
import { PatientFormValues } from "@/types/ui/components/forms/patient-form.types"
import { AnimatePresence, motion } from "framer-motion"
import PatientForm from "@/features/visit/patient-form"

export default function NewVisitPage() {
  const { data: patients, isLoading } = useQuery({
    queryKey: ["patients"],
    queryFn: () => PatientService.getOrganizationPatients(),
    refetchOnWindowFocus: false,
  })

  const [patient, setPatient] = useState<PatientFormValues | null>(null)

  return (
    <div className="flex flex-col items-center justify-center mt-12">
      {isLoading ? <Skeleton className="w-full h-full" /> : null}

      <div className="flex flex-col">
        {isLoading ? null : (
          <Field className="w-full">
            <Label>Patient</Label>

            <Combobox
              items={patients ?? []}
              onChange={console.log}
              onCreate={query => setPatient({ name: query })}
            />
          </Field>
        )}

        <AnimatePresence mode="wait">
          {patient ? (
            <motion.div
              className="mt-2"
              key="patient-form"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2, type: "spring", bounce: 0.3 }}
            >
              <PatientForm patient={patient} />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  )
}
