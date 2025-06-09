import { useState } from 'react'
import './App.css'
import Quote from './Components/Quote'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  
  return (
    <div>
      <Quote/>
      <div className='pt-3 fw-bold'>
        By KOBBI
      </div>
    </div>
  )
}

export default App
