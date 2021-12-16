import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../AuthContext'
import { GlobalContext } from '../GlobalContext'

const initCount = () => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log('init trigger')
  return 5
}

export const DemoUseState = () => {
  const [count, setCount] = useState(initCount)
  const [name, setName] = useState('name')
  const authState = useContext(AuthContext)
  const { state } = useContext(GlobalContext)

  useEffect(() => {
    console.log('useEffect trigger')
  }, [])

  return (
    <>
      <h1>{state.count}</h1>
      <h2>{authState.theme}</h2>
      <h1>Demo useState</h1>
      <button
        onClick={() => {
          setCount(c => c + 1)
          setName('new Nanme')
        }}
      >
        -
      </button>
      <span>{name}</span>
      <span>{count}</span>
      <button onClick={() => {}}>+</button>
    </>
  )
}
