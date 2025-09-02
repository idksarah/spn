import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Art from './pages/Art'
import Media from './pages/Media'
import Photography from './pages/Photography'
import Writings from './pages/Writings'
import Home from './pages/Home'

function App() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (e: any) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <BrowserRouter>
      <div className="main">
        <div
          className="invert-cursor"
          style={{ left: pos.x, top: pos.y }}
        />
      </div>

      <nav className='hidden'>
        <Link to="/">Home</Link> |{" "}
        <Link to="/art">Art</Link>
        <Link to="/media">Media</Link>
        <Link to="/photography">Photography</Link>
        <Link to="/writings">Writing</Link>
      </nav>

      <Routes>
        <Route path="/art" element={<Art />} />
        <Route path="/" element={<Home />} />
        <Route path="/media" element={<Media />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/writings" element={<Writings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
