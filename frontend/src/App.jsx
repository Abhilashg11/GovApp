import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Sidebar from './container/Sidebar_Container/Sidebar'
import Navbar from './container/Navbar_Container/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div><Navbar/></div>
      <div><Sidebar/></div>
        
      
      
    </div>
  )
}

export default App
