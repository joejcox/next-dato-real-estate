export function getCurrencySybmol(str) {
  switch (str) {
    case str === "GBP":
      return "£"
    case str === "USD":
      return "$"
    case str === "EUR":
      return "€"
    default:
      return "£"
  }
}

export function getRentalFrequency(str) {
  switch (str) {
    case str === "Weekly":
      return "pcw"
    case str === "Monthly":
      return "pcm"
    default:
      return "pcm"
  }
}
