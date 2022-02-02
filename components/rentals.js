import RentalsPreview from "./rentals-preview"

const Rentals = ({ properties }) => {
  return (
    <section className="section bg-gradient-to-b from-grey-900 to-dark">
      <div className="container-flex">
        {properties.map((property) => (
          <RentalsPreview property={property} key={property.id} />
        ))}
      </div>
    </section>
  )
}

export default Rentals
