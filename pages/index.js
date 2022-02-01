import Head from "next/head"
import Rentals from "../components/rentals"
import axios from "axios"

export default function Home({ properties }) {
  return (
    <div>
      <Head>
        <title>uMove | Houses To Rent UK</title>
        <meta name="description" content="Estate Agents Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="py-6" role="banner">
        <div className="container">
          <h1 className="text-6xl">uMove</h1>
        </div>
      </section>

      <main role="main">
        <Rentals properties={properties} />
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await axios.post(`${process.env.BASE_URL}/api/rentals`)
  const { allPropertyRentals } = response.data
  return {
    props: {
      properties: allPropertyRentals,
    },
  }
}
