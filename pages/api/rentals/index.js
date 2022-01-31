import { request } from "../../../lib/datocms"

const RENTALS_QUERY = `query Properties {
  allPropertyRentals {
    id
    additionalImages {
      alt
      height
      id
      url
      width
    }
    features
    currency
    furnishedType
    mainImage {
      alt
      height
      id
      width
      url
      blurUpThumb
      blurhash
    }
    price
    paymentFrequency
    numberOfBedrooms
    numberOfBathrooms
    propertyTitle
    propertyType
    showAdditionalImages
    slug
  }
}`

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { allPropertyRentals } = await request({
      query: RENTALS_QUERY,
      token: process.env.DATO_API_TOKEN,
    })

    res.status(200).json({ allPropertyRentals })
  }

  res.end()
}
