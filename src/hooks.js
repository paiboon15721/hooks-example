import { useEffect, useState } from 'react'

export const useResource = resource => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
      .then(x => x.json())
      .then(xs => {
        setLoading(false)
        setItems(xs)
      })
  }, [resource])
  return { items, loading }
}
