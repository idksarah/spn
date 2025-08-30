import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Art from './pages/Art'
import Media from './pages/Media'
import Photography from './pages/Photography'
import Writing from './pages/Writing'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <div className='main'>
      </div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/art">Art</Link>
        <Link to="/media">Media</Link>
        <Link to="/photography">Photography</Link>
        <Link to="/writing">writing</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/art" element={<Art />} />
        <Route path="/" element={<Home />} />
        <Route path="/media" element={<Media />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/writing" element={<Writing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
