'use client'
//image
import Image from 'next/image'

//framer-motion
import { motion } from 'framer-motion'

//variants
import fadeIn from '@/variants'

// link / react scroll
import { Link } from 'react-scroll'

//icons
import { FaPhone, FaEnvelope } from 'react-icons/fa'

//components
import { Copyright } from '.'

import { useMediaQuery } from 'react-responsive'

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = (props) => {
  const desktopMode = useMediaQuery({
    query: '(min-width: 1300px)',
  })
  return (
    <footer className="pt-20 bg-white z-20" id="contact">
      <div className="container mx-auto mb-24">
        {/* grid */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }}
            className="flex flex-col flex-1 gap-y-8"
          >
            {/* logo */}
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
            {/* text */}
            <div className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="flex flex-col gap-y-4 font-semibold">
              <div className="flex gap-x-3">
                <FaPhone className="text-accent" />
                <a href="tel:+71234567890" className="font-medium">
                  +7(123)-456-78-90
                </a>
              </div>
              <div className="flex gap-x-3">
                <FaEnvelope className="text-accent" />
                <a href="mailto:@officecarland.com" className="font-medium">
                  @officecarland.com
                </a>
              </div>
            </div>
          </motion.div>
          {/* links */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }}
            className="flex flex-1 flex-col xl:items-center"
          >
            <h3 className="h3 font-bold mb-8">Company</h3>
            <ul className="flex flex-col gap-y-4 font-semibold">
              <li>
                <a href="#">New York</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Mobile</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">How we work</a>
              </li>
            </ul>
          </motion.div>
          {/* program */}
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1"
          >
            <h3 className="h3 font-bold mb-8">Working Hourse</h3>
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-2">
                <div className="text-seconday">Mon-Fri:</div>
                <div className="font-semibold">09:00AM-09:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-seconday">Sat:</div>
                <div className="font-semibold">09:00AM-07:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-seconday">Sun:</div>
                <div className="font-semibold">Close</div>
              </div>
            </div>
          </motion.div>
          {/* NewsLetters */}
          <motion.div
            variants={fadeIn('up', 0.8)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1"
          >
            <div>
              <h3 className="h3 font-bold mb-8">Newsletter</h3>
              <div className="mb-9 text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </div>
              <form className="flex gap-x-2 gap-y-2 md:gap-y-0 h-14 flex-col md:flex-row">
                <input
                  className="outline-none bg-white h-full border rounded-lg pl-4 focus:border-accent py-6"
                  type="text"
                  placeholder="Your name"
                />
                <button
                  type="submit"
                  className="btn btn-sm btn-accent w-full py-6 md:w-24"
                >
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      <Copyright />
    </footer>
  )
}

export default Footer
