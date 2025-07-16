import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let title = "게시판";

  return (
    <div className='App'>
      <div className='nav'>
        <h3>{title}</h3>
      </div>
    </div>
  )
}

export default App
