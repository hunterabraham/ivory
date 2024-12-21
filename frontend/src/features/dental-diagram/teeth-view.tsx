import mandibularThirdMolarLeft from "@/assets/teeth/photos/mandibular-third-molar-left.png"
import mandibularSecondMolarLeft from "@/assets/teeth/photos/mandibular-second-molar-left.png"
import mandibularFirstMolarLeft from "@/assets/teeth/photos/mandibular-first-molar-left.png"
import mandibularFirstPremolarLeft from "@/assets/teeth/photos/mandibular-first-premolar-left.png"
import mandibularSecondPremolarLeft from "@/assets/teeth/photos/mandibular-second-premolar-left.png"
import mandibularCanineLeft from "@/assets/teeth/photos/mandibular-canine-left.png"
import mandibularLateralIncisorLeft from "@/assets/teeth/photos/mandibular-lateral-incisor-left.png"
import mandibularInternalIncisorLeft from "@/assets/teeth/photos/mandibular-internal-incisor-left.png"
import mandibularThirdMolarRight from "@/assets/teeth/photos/mandibular-third-molar-right.png"
import mandibularSecondMolarRight from "@/assets/teeth/photos/mandibular-second-molar-right.png"
import mandibularFirstMolarRight from "@/assets/teeth/photos/mandibular-first-molar-right.png"
import mandibularFirstPremolarRight from "@/assets/teeth/photos/mandibular-first-premolar-right.png"
import mandibularSecondPremolarRight from "@/assets/teeth/photos/mandibular-second-premolar-right.png"
import mandibularCanineRight from "@/assets/teeth/photos/mandibular-canine-right.png"
import mandibularLateralIncisorRight from "@/assets/teeth/photos/mandibular-lateral-incisor-right.png"
import mandibularInternalIncisorRight from "@/assets/teeth/photos/mandibular-internal-incisor-right.png"
import maxillaryThirdMolarLeft from "@/assets/teeth/photos/maxillary-third-molar-left.png"
import maxillarySecondMolarLeft from "@/assets/teeth/photos/maxillary-second-molar-left.png"
import maxillaryFirstMolarLeft from "@/assets/teeth/photos/maxillary-first-molar-left.png"
import maxillarySecondPremolarLeft from "@/assets/teeth/photos/maxillary-second-premolar-left.png"
import maxillaryFirstPremolarLeft from "@/assets/teeth/photos/maxillary-first-premolar-left.png"
import maxillaryCanineLeft from "@/assets/teeth/photos/maxillary-canine-left.png"
import maxillaryLateralIncisorLeft from "@/assets/teeth/photos/maxillary-lateral-incisor-left.png"
import maxillaryInternalIncisorLeft from "@/assets/teeth/photos/maxillary-internal-incisor-left.png"
import maxillaryThirdMolarRight from "@/assets/teeth/photos/maxillary-third-molar-right.png"
import maxillarySecondMolarRight from "@/assets/teeth/photos/maxillary-second-molar-right.png"
import maxillaryFirstMolarRight from "@/assets/teeth/photos/maxillary-first-molar-right.png"
import maxillarySecondPremolarRight from "@/assets/teeth/photos/maxillary-second-premolar-right.png"
import maxillaryFirstPremolarRight from "@/assets/teeth/photos/maxillary-first-premolar-right.png"
import maxillaryCanineRight from "@/assets/teeth/photos/maxillary-canine-right.png"
import maxillaryLateralIncisorRight from "@/assets/teeth/photos/maxillary-lateral-incisor-right.png"
import maxillaryInternalIncisorRight from "@/assets/teeth/photos/maxillary-internal-incisor-right.png"
import { useState } from "react"
import { insertOrRemove } from "@/utils/utils"
import Tooth from "./tooth"
import ToolWheel from "./tool-wheel/tool-wheel"

const MANDIBULAR_TEETH_MODELS = [
  {
    id: "mandibular_third_molar_left",
    path: mandibularThirdMolarLeft,
  },
  {
    id: "mandibular_second_molar_left",
    path: mandibularSecondMolarLeft,
  },
  {
    id: "mandibular_first_molar_left",
    path: mandibularFirstMolarLeft,
  },
  {
    id: "mandibular_first_premolar_left",
    path: mandibularFirstPremolarLeft,
  },
  {
    id: "mandibular_second_premolar_left",
    path: mandibularSecondPremolarLeft,
  },
  {
    id: "mandibular_canine_left",
    path: mandibularCanineLeft,
  },
  {
    id: "mandibular_lateral_incisor_left",
    path: mandibularLateralIncisorLeft,
  },
  {
    id: "mandibular_internal_incisor_left",
    path: mandibularInternalIncisorLeft,
  },
  {
    id: "mandibular_internal_incisor_right",
    path: mandibularInternalIncisorRight,
  },
  {
    id: "mandibular_lateral_incisor_right",
    path: mandibularLateralIncisorRight,
  },
  {
    id: "mandibular_canine_right",
    path: mandibularCanineRight,
  },
  {
    id: "mandibular_first_premolar_right",
    path: mandibularFirstPremolarRight,
  },
  {
    id: "mandibular_second_premolar_right",
    path: mandibularSecondPremolarRight,
  },
  {
    id: "mandibular_first_molar_right",
    path: mandibularFirstMolarRight,
  },
  {
    id: "mandibular_second_molar_right",
    path: mandibularSecondMolarRight,
  },
  {
    id: "mandibular_third_molar_right",
    path: mandibularThirdMolarRight,
  },
]

const MAXILLARY_TEETH_MODELS = [
  {
    id: "maxillary_third_molar",
    path: maxillaryThirdMolarLeft,
  },
  {
    id: "maxillary_second_molar",
    path: maxillarySecondMolarLeft,
  },
  {
    id: "maxillary_first_molar",
    path: maxillaryFirstMolarLeft,
  },
  {
    id: "maxillary_second_premolar",
    path: maxillarySecondPremolarLeft,
  },
  {
    id: "maxillary_first_premolar",
    path: maxillaryFirstPremolarLeft,
  },
  {
    id: "maxillary_canine",
    path: maxillaryCanineLeft,
  },
  {
    id: "maxillary_lateral_incisor",
    path: maxillaryLateralIncisorLeft,
  },
  {
    id: "maxillary_internal_incisor",
    path: maxillaryInternalIncisorLeft,
  },
  {
    id: "maxillary_internal_incisor_right",
    path: maxillaryInternalIncisorRight,
  },
  {
    id: "maxillary_lateral_incisor_right",
    path: maxillaryLateralIncisorRight,
  },
  {
    id: "maxillary_canine_right",
    path: maxillaryCanineRight,
  },
  {
    id: "maxillary_first_premolar_right",
    path: maxillaryFirstPremolarRight,
  },
  {
    id: "maxillary_second_premolar_right",
    path: maxillarySecondPremolarRight,
  },

  {
    id: "maxillary_first_molar_right",
    path: maxillaryFirstMolarRight,
  },

  {
    id: "maxillary_second_molar_right",
    path: maxillarySecondMolarRight,
  },

  {
    id: "maxillary_third_molar_right",
    path: maxillaryThirdMolarRight,
  },
]

export default function TeethView() {
  const [selectedTeeth, setSelectedTeeth] = useState<string[]>([])

  return (
    <div className="relative shadow-sm rounded-lg m-4 border border-gray-200">
      <ToolWheel className="mt-2" />

      <div className="flex flex-row">
        {MAXILLARY_TEETH_MODELS.map(model => {
          return (
            <div
              className="w-1/8"
              key={model.id}
              onClick={() =>
                setSelectedTeeth(prev => insertOrRemove(prev, model.id))
              }
            >
              <Tooth src={model.path} />
            </div>
          )
        })}
      </div>

      <div className="flex flex-row">
        {MANDIBULAR_TEETH_MODELS.map(model => {
          return (
            <div
              className="w-1/16"
              key={model.id}
              onClick={() =>
                setSelectedTeeth(prev => insertOrRemove(prev, model.id))
              }
            >
              <Tooth src={model.path} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
