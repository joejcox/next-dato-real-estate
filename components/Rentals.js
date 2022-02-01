import RentalsFeatured from "./rentals-featured"
import RentalsPreview from "./rentals-preview"

const Rentals = ({ properties }) => {
  const featuredProperty = properties[0]
  const remainingProperties = properties.slice(1)
  return (
    <>
      <RentalsFeatured property={featuredProperty} />
      <section className="section bg-white">
        <div className="container-flex">
          {remainingProperties.map((property) => (
            <RentalsPreview property={property} key={property.id} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Rentals
