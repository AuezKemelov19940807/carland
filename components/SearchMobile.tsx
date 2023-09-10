import * as React from 'react'
import { DateSelection, HoursSelection, LocationSelection } from '.'

interface ISearchMobileProps {}

const SearchMobile: React.FunctionComponent<ISearchMobileProps> = (props) => {
  return (
    <div className="xl:hidden">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-4">
          {/* location selection */}
          <LocationSelection />
          {/* date selection */}
          <DateSelection />
          {/* hours selection */}
          <HoursSelection />
          <div className="flex items-center px-6">
            <button className="btn btn-sm btn-accent w-[164px] mx-auto">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchMobile
