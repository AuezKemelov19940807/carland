'use client'
import {
  useState,
  useContext,
  createContext,
  SetStateAction,
  Dispatch,
} from 'react'

//create context
interface SearchContextProvider {
  children: React.ReactNode
}
interface IcreateContext {
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
}
//

export const SearchContext = createContext<IcreateContext>({
  active: false,
  setActive: () => {},
})

export const SearchContextProvider: React.FC<SearchContextProvider> = ({
  children,
}) => {
  const [searchActive, setSearchActive] = useState<boolean>(false)
  return (
    <SearchContext.Provider
      value={{ active: searchActive, setActive: setSearchActive }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export const useSearchContext = () => useContext(SearchContext)
