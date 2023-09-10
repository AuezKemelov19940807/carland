'use client'
import Image from 'next/image'
import { useState, useEffect, Context, useContext } from 'react'
import { Link } from 'react-scroll'
import SearchMobile from './SearchMobile'
import { useMediaQuery } from 'react-responsive'
import { BiMenuAltRight, BiX } from 'react-icons/bi'
import { SearchContext } from '@/context/search'
interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = (props) => {
  const { setActive } = useContext(SearchContext)
  const [header, setHeader] = useState<boolean>(false)
  const [nav, setNav] = useState<boolean>(false)
  const desktopMode = useMediaQuery({
    query: '(min-width: 1300px)',
  })

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 48) {
        setHeader(true)
      } else {
        setHeader(false)
      }

      if (window.scrollY > 600) {
        setActive(true)
      } else {
        setActive(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <header
      className={`${
        header ? 'bg-white shadow-md py-2' : 'bg-transparent shadow-none py-4'
      } fixed w-full z-20 mx-auto max-w-[1928px] transition-all duration-300`}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-center justify-between py-4">
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            <Image
              src="/icons/logo.svg"
              alt="logo"
              width={194}
              height={64}
              priority
            />
          </Link>
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer xl:hidden"
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </div>
        </div>
        <nav
          className={`${
            nav
              ? 'overflow-y-auto max-h-max py-8 px-4 xl:py-0 xl:px-0'
              : ' max-h-0 xl:max-h-max'
          } flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case `}
        >
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
            activeClass="active"
          >
            Home
          </Link>
          <Link
            to="cars"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
            activeClass="active"
          >
            Cars
          </Link>
          <Link
            to="about"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
            activeClass="active"
          >
            About
          </Link>
          <Link
            to="why"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
            activeClass="active"
          >
            Why us
          </Link>
          <Link
            to="testimonial"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
            activeClass="active"
          >
            Testimonials
          </Link>
          <Link
            to="contact"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
            activeClass="active"
          >
            Contact
          </Link>
          <Link
            to="/"
            smooth={desktopMode}
            spy={true}
            className="xl:hidden btn-primary btn btn-sm max-w-[164px] mx-auto cursor-pointer"
            activeClass="active"
          >
            See all cars
          </Link>
          <SearchMobile />
        </nav>
      </div>
    </header>
  )
}

export default Header
