import Image from "next/image"
import Link from "next/link"
import { IoMdMail } from "react-icons/io"

const Header = () => (
  <header className="h-32 sticky z-50">
    <nav
      role="navigation"
      className="h-8 flex items-center bg-dark"
      aria-label="Secondary Navigation"
    >
      <div className="container-flex justify-between">
        <a
          href="mailto:enquiry@redacstrattons.com"
          className="text-white flex items-center underline"
        >
          <IoMdMail className="mr-2 mt-0.5" />
          enquiry@redacstrattons.com
        </a>
      </div>
    </nav>
    <div className="container-flex justify-between items-center h-full">
      <Link href="/">
        <a>
          <figure className="h-[100px] w-[250px] relative">
            <Image
              src="https://www.redacstrattons.com/images/logo_redac_strattons_web.svg"
              alt="Redac Strattens London Estate Agents"
              layout="fill"
              className="w-full h-full"
            />
          </figure>
        </a>
      </Link>
      <nav role="navigation" aria-label="Main Navigation">
        Lettings
      </nav>
    </div>
  </header>
)

export default Header
