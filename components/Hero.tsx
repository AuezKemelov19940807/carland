'use client'
import * as React from 'react'
import { Search } from '.'
import { SearchContext } from '@/context/search'
import { useContext } from 'react'
import Image from 'next/image'
import fadeIn from '@/variants'

import { motion } from 'framer-motion'
interface IHeroProps {}

const Hero: React.FC<IHeroProps> = (props) => {
  const { active } = useContext(SearchContext)

  return (
    <section className="section h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
      <div className="container mx-auto h-full xl:pt-10">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          <div className="text-center xl:max-w-lg xl:text-left mt-16 xl:mt-0">
            <motion.h1
              variants={fadeIn('down', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
              className="h1"
            >
              Explore the Finest <span className="text-accent">Global</span>{' '}
              offers
            </motion.h1>
            <motion.p
              variants={fadeIn('down', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
              className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10"
            >
              Find your ideal ride for any adventure with our diverse range of{' '}
              affordable and dependable car rentals.
            </motion.p>
            <motion.div
              variants={fadeIn('down', 0.8)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
              className="flex gap-x-3 justify-center xl:justify-start"
            >
              <button className="btn-cta">
                <Image
                  src="/icons/buttons/app-store.svg"
                  width={131}
                  height={34}
                  alt="App Store Icon"
                />
              </button>
              <button className="btn-cta">
                <Image
                  src="/icons/buttons/google-play.svg"
                  width={136}
                  height={36}
                  alt="goolgle Icon"
                />
              </button>
            </motion.div>
          </div>
          {/* img car */}
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }}
            className="relative  w-full h-full max-h-[50vh] md:max-w-[70vh] xl:max-w-[860px] xl:max-h-[542px] xl:absolute xl:-right-[100px] min-[1680px]:right-[120px] xl:top-48"
          >
            <Image
              src={'/images/hero/car.svg'}
              alt="car"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </motion.div>
        </div>
      </div>
      {active ? (
        <div className="fixed top-[113px] z-10 w-full max-w-[1920px]">
          <Search />
        </div>
      ) : (
        <div className="-mt-12 w-full max-w-[1300px] mx-auto">
          <Search />
        </div>
      )}
    </section>
  )
}

export default Hero
