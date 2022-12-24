import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Layout from './components/Layout/Layout.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout/>
  )
}

export default App
