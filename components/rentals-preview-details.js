import { GiBathtub } from "react-icons/gi"
import { IoIosBed } from "react-icons/io"

const RentalsPreviewDetails = ({ bathrooms, bedrooms }) => (
  <div className="flex-wrap-start text-sm">
    <p className="property-information property-information--gap">
      <IoIosBed className="property-information--icon" /> {bedrooms} bed
    </p>
    <p className="property-information">
      <GiBathtub className="property-information--icon" /> {bathrooms} bathroom
    </p>
  </div>
)

export default RentalsPreviewDetails
