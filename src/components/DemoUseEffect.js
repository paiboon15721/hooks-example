import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../AuthContext'
import { useResource } from '../hooks'

const resourceTypes = [
  'posts',
  'comments',
  'albums',
  'photos',
  'todos',
  'users',
]

export const DemoUseEffect = () => {
  const [resource, setResource] = useState('posts')
  const { items, loading } = useResource(resource)
  const authState = useContext(AuthContext)

  useEffect(() => {
    const id = setInterval(() => {
      console.log('sent Analytics data')
    }, 500)

    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <>
      <button
        onClick={() => {
          authState.setTheme('green')
        }}
      >
        Change theme
      </button>
      <h2>{authState.theme}</h2>
      <AuthContext.Consumer>
        {state => {
          return <h1>{state.theme}</h1>
        }}
      </AuthContext.Consumer>
      <h1>Demo useEffect</h1>
      {resourceTypes.map(x => (
        <button
          onClick={() => {
            setResource(x)
          }}
          key={x}
        >
          {x}
        </button>
      ))}
      <h2>Result: </h2>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        items.map(x => <pre key={x.id}>{JSON.stringify(x)}</pre>)
      )}
    </>
  )
}
