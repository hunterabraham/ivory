import { Link, useNavigate } from "react-router-dom"
import { useGoogleLogin } from "@react-oauth/google"
import AuthService from "../../services/auth-service"
import { useAppDispatch } from "../../app/hooks"
import { fetchUserOrganizations, setUser } from "../../store/user-slice"
import {
  Button,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
} from "@headlessui/react"
import { classNames } from "@/utils/utils"

export default function LoginPage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async codeResponse => {
      const user = await AuthService.authorizeUser({
        code: codeResponse.code,
      })

      dispatch(setUser(user))
      dispatch(fetchUserOrganizations())
      navigate("/organization-select")
    },
    onError: errorResponse => console.log(errorResponse),
  })

  return (
    <div className="flex flex-1 w-screen h-screen">
      <Fieldset className="flex flex-col w-full h-full items-center justify-center space-y-6 rounded-xl bg-slate-900 p-6 sm:p-10">
        <Legend className="text-base/7 font-semibold text-white">Login</Legend>
        <Field className="w-96">
          <Label className="text-sm/6 font-medium text-white">Username</Label>
          <Input
            className={classNames(
              "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
            )}
          />
        </Field>
        <Field className="w-96">
          <Label className="text-sm/6 font-medium text-white">Password</Label>

          <Input
            type="password"
            className={classNames(
              "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
            )}
          />
        </Field>
        <Button
          onClick={googleLogin}
          className="flex w-fit bg-white/5 rounded-lg px-4 py-2 text-white text-sm"
        >
          Login with Google
        </Button>
      </Fieldset>
    </div>
  )
}
