import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import axios from "axios"
import { getCurrencySybmol, getRentalFrequency } from "../lib/utils"
import { IoIosBed } from "react-icons/io"
import { GiBathtub } from "react-icons/gi"

export default function Home({ properties }) {
  console.log(properties[0])
  return (
    <div>
      <Head>
        <title>Estate Agents</title>
        <meta name="description" content="Estate Agents Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="py-6" role="banner">
        <div className="container">
          <h1 className="text-6xl">Estate Agents</h1>
        </div>
      </section>

      <main className="py-24 bg-grey-900" role="main">
        <div className="container">
          <section className="flex flex-wrap">
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
          </section>
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await axios.post("/api/rentals")
  const { allPropertyRentals } = response.data
  return {
    props: {
      properties: allPropertyRentals,
    },
  }
}
