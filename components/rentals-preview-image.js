import Image from "next/image"
const RentalsPreviewImage = ({ image }) => {
  return (
    <figure className="w-full h-72 relative">
      <Image
        src={image.url}
        alt={image.alt}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL={image.blurUpThumb}
      />
    </figure>
  )
}

export default RentalsPreviewImage
