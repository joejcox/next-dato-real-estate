import RentalsPreviewDetails from "./rentals-preview-details"
import RentalsDivider from "./rentals-divider"
import RentalsPreviewImage from "./rentals-preview-image"
import RentalsPreviewPrice from "./rentals-preview-price"

const RentalsPreview = ({ property }) => {
  return (
    <article className="w-full lg:w-1/2 xl:w-1/3" key={property.id}>
      <div className="p-2">
        <div className="shadow">
          <RentalsPreviewImage image={property.mainImage} />
          <footer className="py-6 px-8 bg-white">
            <RentalsPreviewDetails
              bathrooms={property.numberOfBathrooms}
              bedrooms={property.numberOfBedrooms}
            />
            <RentalsDivider />
            <RentalsPreviewPrice
              currency={property.currency}
              frequency={property.paymentFrequency}
              price={property.price}
            />
          </footer>
        </div>
      </div>
    </article>
  )
}

export default RentalsPreview
