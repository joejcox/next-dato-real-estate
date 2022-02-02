import Link from "next/link"

const Banner = () => (
  <section className="banner bg-gradient-to-b from-white" role="banner">
    {/* bg-gradient-to-b from-white */}
    {/* bg-white bg-opacity-80 xl:bg-opacity-0 */}
    <div className="container-flex items-center h-full">
      <div className="banner-text font-bold text-center xl:text-left font-sans mx-auto xl:mx-0 w-full md:w-2/3 xl:w-1/2">
        <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-7xl 2xl:text-8xl 2xl:mt-8 text-dark uppercase">
          Helping <span className="text-highlight">you</span> find a
          <strong> home in London</strong>
        </h1>
        <div className="buttons">
          <Link href="/">
            <a className="banner-button button--primary">
              <span>To Buy</span>
              <span>To Buy</span>
            </a>
          </Link>
          <Link href="/">
            <a className="banner-button button--secondary">
              <span>To Rent</span>
              <span>To Rent</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  </section>
)

export default Banner
