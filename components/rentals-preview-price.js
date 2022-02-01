import Link from "next/link"
import { getCurrencySybmol, getRentalFrequency } from "../lib/utils"

const RentalsPreviewPrice = ({ currency, frequency, price }) => {
  const cs = getCurrencySybmol(currency)
  const freq = getRentalFrequency(frequency)

  return (
    <div className="flex justify-between items-center mt-4">
      <Link href="/">
        <a className="button button-primary">Book Viewing</a>
      </Link>
      <div className="inline-block">
        <span className="text-xl font-bold inline-block mr-0.5">
          {console.log(cs)}
          {cs + price}
        </span>
        <span className="text-sm">/{freq}</span>
      </div>
    </div>
  )
}

export default RentalsPreviewPrice
