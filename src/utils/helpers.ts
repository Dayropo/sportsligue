export const getTitle = (str: string) => {
  if (!str) return

  let newArr = str.split("-")

  return newArr.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}
