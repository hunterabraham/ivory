import { useAppDispatch, useAppSelector } from "@/app/hooks"
import Button from "@/components/button/button"
import Combobox from "@/components/forms/Combobox"
import { fetchUserOrganizations, setOrganization } from "@/store/user-slice"
import { ComboboxItem } from "@/types/ui/components/forms/combobox.types"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function OrganizationSelect() {
  const organizations = useAppSelector(state => state.user.userOrganizations)
  const user = useAppSelector(state => state.user.user)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [selectedOrganization, setSelectedOrganization] = useState<
    string | null
  >(null)

  const comboOrgs = useMemo(() => {
    return organizations.map(
      org =>
        ({
          id: org.unique_id,
          name: org.name,
        }) as ComboboxItem,
    )
  }, [organizations])

  useEffect(() => {
    dispatch(fetchUserOrganizations())
  }, [dispatch])

  const handleContinue = useCallback(
    (selectedOrganization: string | null) => {
      if (!selectedOrganization) return

      const organization = organizations.find(
        org => org.unique_id === selectedOrganization,
      )

      if (organization) {
        localStorage.setItem("organization", organization.unique_id)
        dispatch(setOrganization(organization))
        navigate("/")
      }
    },
    [navigate, dispatch, organizations],
  )

  return (
    <div className="h-screen w-screen bg-slate-950 flex flex-col items-center justify-center">
      <div className="text-2xl text-slate-200 font-bold mb-4">
        Welcome to Cleo, {user?.first_name}
      </div>

      <div className="w-96 mb-4">
        <Combobox items={comboOrgs} onChange={setSelectedOrganization} />
      </div>

      <Button onClick={() => handleContinue(selectedOrganization)}>
        <div className="text-white">Continue</div>
      </Button>
    </div>
  )
}
