import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main-container'>
          <div className='form'>
                
                <input type="text" placeholder='book name' />
                <input type='text' placeholder='Description'/>
                <button className='btn'>Sumbit</button>
          </div>
      </div>
    </>
  )
}

export default App
