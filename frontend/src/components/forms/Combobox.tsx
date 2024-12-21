import { ComboboxItem } from "@/types/ui/components/forms/combobox.types"
import {
  Combobox as HeadlessCombobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Label,
  Field,
} from "@headlessui/react"
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid"
import clsx from "clsx"
import { useState } from "react"

export default function Combobox({
  label,
  items,
  onChange,
  onCreate,
}: {
  label?: string
  items: ComboboxItem[]
  onChange: (id: string) => void
  onCreate?: (name: string) => void
}) {
  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState<ComboboxItem | null>(null)

  const filteredItems =
    query === ""
      ? items
      : items.filter(item => {
          return item.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Field className="flex w-full">
      {label ? (
        <Label className="text-sm/6 font-medium text-gray-900">{label}</Label>
      ) : null}

      <HeadlessCombobox
        value={selected}
        onChange={value => {
          if (!value) return

          setSelected(value as ComboboxItem)
          onChange(value.id)
        }}
        onClose={() => setQuery("")}
      >
        <div className="relative w-full">
          <ComboboxInput
            className={clsx(
              "w-full rounded-lg border-none bg-gray-800 bg-opacity-75 backdrop-blur-lg py-1.5 pr-8 pl-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
            )}
            displayValue={(item: ComboboxItem) => item?.name}
            onChange={event => setQuery(event.target.value)}
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
            <ChevronDownIcon className="size-4 fill-white/60 group-data-[hover]:fill-white " />
          </ComboboxButton>
        </div>

        <ComboboxOptions
          anchor="bottom"
          transition
          className={clsx(
            "mt-1 w-[var(--input-width)] rounded-md bg-gray-800 bg-opacity-75 [--anchor-gap:var(--spacing-1)] empty:invisible",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 backdrop-blur-lg",
          )}
        >
          {Boolean(onCreate) && query ? (
            <ComboboxOption
              className="group flex cursor-default items-center gap-2 rounded-sm py-1.5 px-3 select-none data-[focus]:bg-white/10 text-sm/6 text-white"
              value="create"
              onClick={() => onCreate?.(query)}
            >
              Create "{query}"
            </ComboboxOption>
          ) : null}

          {filteredItems.map(item => (
            <ComboboxOption
              key={item.id}
              value={item}
              className="group flex cursor-default items-center gap-2 rounded-sm py-1.5 px-3 select-none data-[focus]:bg-white/10"
            >
              {selected?.id === item.id && (
                <CheckIcon className="size-4 fill-white/60 group-data-[hover]:fill-white" />
              )}
              <div className="text-sm/6 text-white">{item.name}</div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </HeadlessCombobox>
    </Field>
  )
}
