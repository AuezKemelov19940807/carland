'use client'
import { SearchContext } from '@/context/search'
import * as React from 'react'
import { useContext } from 'react'
import { DateSelection, HoursSelection, LocationSelection } from '.'
import { motion } from 'framer-motion'
import fadeIn from '@/variants'

interface ISearchProps {}

const Search: React.FunctionComponent<ISearchProps> = (props) => {
  const { active } = useContext(SearchContext)
  return (
    <motion.div
      variants={fadeIn('up', 1)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.6 }}
      className={`${
        active
          ? 'bg-white rounded-none xl:h-[80px] xl:pt-5 xl:pb-5'
          : 'bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px]'
      } hidden xl:block w-full relative shadow-lg`}
    >
      <div
        className={`flex h-full items-center ${active && 'container mx-auto'}`}
      >
        <LocationSelection />
        <DateSelection />
        <HoursSelection />
        <div className="flex items-center xl:h-full px-6 xl:px-0">
          <button
            className={`${
              active
                ? 'btn btn-sm btn-accent xl:w-[164px]'
                : 'btn btn-lg btn-accent xl:w-[184px]'
            }`}
          >
            Search
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default Search
