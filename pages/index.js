import Head from "next/head"
import Rentals from "../components/rentals"
// import RentalsFeatured from "../components/rentals-featured"
import axios from "axios"
import Banner from "../components/home/banner"
import SearchBox from "../components/search-box"

export default function Home({ properties }) {
  return (
    <>
      <Head>
        <title>Redac Strattons | London Estate Agents</title>
        <meta
          name="description"
          content="Redac Strattons Estate Agents in London"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />

      <SearchBox />

      <main role="main">
        {/* <RentalsFeatured property={properties[0]} /> */}
        <Rentals properties={properties} />
      </main>
    </>
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
