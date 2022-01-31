import Link from "next/link"
import Image from "next/image"
import { GiBathtub } from "react-icons/gi"
import { IoIosBed } from "react-icons/io"

import { getCurrencySybmol, getRentalFrequency } from "../lib/utils"

const Rentals = ({ properties }) => {
  return (
    <section className="py-24 bg-grey-900">
      <div className="container flex flex-wrap">
        {properties.map((property) => {
          const cs = getCurrencySybmol(property.currency)
          const freq = getRentalFrequency(property.paymentFrequency)

          return (
            <article
              className="w-full lg:w-1/2 xl:w-1/3 -px-2"
              key={property.id}
            >
              <div className="p-2">
                <figure className="w-full h-72 relative">
                  <Image
                    src={property.mainImage.url}
                    alt={property.mainImage.alt}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={property.mainImage.blurUpThumb}
                  />
                </figure>
                <div className="py-6 px-8 bg-white">
                  <div className="flex flex-wrap">
                    <p className="w-1/2 flex items-center">
                      <IoIosBed className="mr-2 text-2xl text-grey-800" />{" "}
                      {property.numberOfBedrooms} bed
                    </p>
                    <p className="w-1/2 flex items-center">
                      <GiBathtub className="mr-2 text-2xl text-grey-800" />{" "}
                      {property.numberOfBathrooms} bathroom
                    </p>
                  </div>
                  <footer className="flex justify-between items-center mt-4">
                    <Link href="/">
                      <a className="py-3 px-6 bg-indigo-900 text-white">
                        Request Viewing
                      </a>
                    </Link>
                    <div className="inline-block">
                      <span className="text-2xl font-bold inline-block mr-0.5">
                        {cs + property.price}
                      </span>
                      <span className="text-sm">/{freq}</span>
                    </div>
                  </footer>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Rentals
