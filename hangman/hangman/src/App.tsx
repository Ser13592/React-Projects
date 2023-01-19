import { useState } from 'react'
import { HangMan } from './components/Hangman'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <HangMan/>
   </div>
  
  )
}

export default App
