import Image from "next/image"
import RentalsDivider from "./rentals-divider"
import RentalsPreviewDetails from "./rentals-preview-details"

const RentalsFeatured = ({ property }) => {
  return (
    <section className="h-screen relative featured mt-32">
      <div className="container absolute -top-32 left-0 right-0">
        <div className="shadow-md flex flex-wrap rounded-tr-bl">
          <figure className="w-full xl:w-2/3 relative h-[700px]">
            <Image
              src={property.mainImage.url}
              alt={property.mainImage.alt}
              placeholder="blur"
              blurDataURL={property.mainImage.blurUpThumb}
              layout="fill"
              objectFit="cover"
            />
          </figure>
          <article className="w-full xl:w-1/3 bg-white flex-1 p-8">
            <RentalsPreviewDetails
              bathrooms={property.numberOfBathrooms}
              bedrooms={property.numberOfBedrooms}
            />

            <RentalsDivider />

            <h1 className="text-3xl mt-4">{property.propertyTitle}</h1>
          </article>
        </div>
      </div>
    </section>
  )
}

export default RentalsFeatured

/*
        alt
      height
      id
      width
      url
      blurUpThumb
      blurhash
      */
