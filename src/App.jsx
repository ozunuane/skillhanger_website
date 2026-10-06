import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

function PlaceholderPage({ name }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-muted text-lg font-display">{name} — coming soon</p>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<PlaceholderPage name="About" />} />
        <Route path="/services" element={<PlaceholderPage name="Services" />} />
        <Route path="/work" element={<PlaceholderPage name="Work" />} />
        <Route path="/training" element={<PlaceholderPage name="Training" />} />
        <Route path="/contact" element={<PlaceholderPage name="Contact" />} />
      </Routes>
    </BrowserRouter>
  )
}
