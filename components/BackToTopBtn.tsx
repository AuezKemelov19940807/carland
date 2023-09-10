'use client'
import { useState, useEffect } from 'react'
import { FaChevronUp } from 'react-icons/fa'
import { Link } from 'react-scroll'
interface IBackToTopBtnProps {}

const BackToTopBtn: React.FC<IBackToTopBtnProps> = () => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <Link
      to="home"
      smooth={true}
      className={`${
        !isActive && 'hidden'
      } fixed bg-accent hover:bg-accent-hover w-12 h-12 right-16 bottom-11 z-10 cursor-pointer flex items-center justify-center text-white border-2 border-white`}
    >
      <FaChevronUp className="text-lg" />
    </Link>
  )
}

export default BackToTopBtn
