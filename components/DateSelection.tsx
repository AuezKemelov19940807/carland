'use client'
import * as React from 'react'
import { useState } from 'react'
//headless ui
import { Menu } from '@headlessui/react'
//icons
import { FaCalendarAlt } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
//react date

import { format, addDays } from 'date-fns'
import { Calendar, DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
interface IDateSelectionProps {}

type IDateProps = {
  startDate: Date
  endDate: null
  key: string
}

const DateSelection: React.FC<IDateSelectionProps> = (props) => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(), // Use null if you don't want to have endDate
      key: 'selection',
    },
  ])
  return (
    <Menu as="div" className="w-full h-full xl:flex-row">
      <div className="relative flex-1">
        <Menu.Button className="dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8">
          <div className="w-full h-16 xl:h-full flex justify-center xl:justify-start xl:border-r xl:border-black/10">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
                <FaCalendarAlt className="text-accent" />
                <div className="text-[15px] font-bold uppercase">
                  Select Date
                </div>
              </div>
              <div className="flex items-center mt-1 gap-x-2 xl:ml-6">
                <div className="uppercase font-medium text-[13px] text-secondary text-center  xl:text-left">
                  {format(date[0].startDate, 'dd/MM/yyy')}
                </div>
                <FaArrowRightLong className="text-accent text-[12px]" />
                <div className="uppercase font-medium text-[13px] text-secondary text-center  xl:text-left">
                  {date[0].endDate ? (
                    <div> {format(date[0].endDate, 'dd/MM/yyyy')} </div>
                  ) : (
                    <div> {format(date[0].startDate, 'dd/MM/yyyy')} </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Menu.Button>
        <Menu.Items className="dropdown-menu shadow-lg absolute -top-96 xl:top-[90px] left-1/2 xl:left-0 z-50 transform -translate-x-1/2 xl:translate-x-0 text-sm text-center xl:text-left w-full bg-white max-w-[332px] rounded-[10px] overflow-hidden">
          <DateRange
            onChange={(item: any) => setDate([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
            rangeColors={['#ed1d24']}
            minDate={addDays(new Date(), 0)}
          />
        </Menu.Items>
      </div>
    </Menu>
  )
}

export default DateSelection
