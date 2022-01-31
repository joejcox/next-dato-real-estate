export function getCurrencySybmol(str) {
  console.log(str)
  switch (str) {
    case "GBP":
      return "£"
    case "USD":
      return "$"
    case "EUR":
      return "€"
    default:
      return "£"
  }

}

export function getRentalFrequency(str) {
  switch (str) {
    case "Weekly":
      return "pcw"
    case "Monthly":
      return "pcm"
    default:
      return "pcm"
  }
}
