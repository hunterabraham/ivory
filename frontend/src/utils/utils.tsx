export function insertOrRemove<T>(array: T[], item: T) {
  return array.includes(item) ? array.filter(i => i !== item) : [...array, item]
}

export function classNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
