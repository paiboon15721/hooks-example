import { useState } from 'react'
import { DemoUseEffect } from './components/DemoUseEffect'
import { AuthContext } from './AuthContext'
import { DemoUseState } from './components/DemoUseState'
import { GlobalProvider } from './GlobalContext'
import { DemoContext } from './components/DemoContext'

const App = () => {
  const [showDemoUseEffect, setShowDemoUseEffect] = useState(true)
  const [theme, setTheme] = useState('blue')

  return (
    <>
      <button
        onClick={() => {
          setShowDemoUseEffect(x => !x)
        }}
      >
        Toggle DemoUseEffect
      </button>
      <GlobalProvider>
        <AuthContext.Provider value={{ theme, setTheme }}>
          <DemoContext />
          <DemoUseState />
          {showDemoUseEffect && <DemoUseEffect />}
          <DemoContext />
        </AuthContext.Provider>
      </GlobalProvider>
    </>
  )
}

export default App
