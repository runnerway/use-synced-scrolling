import React from 'react'
import { useMyHook } from 'use-synced-scrolling'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App