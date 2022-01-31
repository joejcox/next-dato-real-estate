import { request } from "../../../lib/datocms"

export default async function handler(req, res) {
  const { slug } = req.query
  const SINGLE_QUERY = `query SingleProperty {
        allPropertyRentals(filter: {slug: {eq: "${slug}"}}) {
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

  const response = await request({
    query: SINGLE_QUERY,
    token: process.env.DATO_API_TOKEN,
  })

  res.status(200).json({ response })
}
