import MenuItem from "./menu-item"

export default function Menu() {
  return (
    <div className="flex flex-row gap-8 items-start justify-start h-full w-full">
      <MenuItem title="Products" subItems={[]} />

      <MenuItem
        title="Operations"
        subItems={[
          { title: "Visit", description: "Create a new visit", link: "/visit" },
        ]}
      />
    </div>
  )
}
