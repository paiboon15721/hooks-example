import { useContext } from 'react'
import { GlobalContext } from '../GlobalContext'

export const DemoContext = () => {
  const { dispatch } = useContext(GlobalContext)

  return (
    <button
      onClick={() => {
        dispatch('inc')
      }}
    >
      Inc
    </button>
  )
}
