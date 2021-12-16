import { createContext, useReducer } from 'react'

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action) {
        case 'inc':
          return { ...state, count: state.count + 1 }
        case 'dec':
          return { ...state, count: state.count - 1 }
        default:
          new Error()
      }
    },
    { count: 0 },
  )

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}
