import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './i18n'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import TheCarpenter from './pages/TheCarpenter'
import Series from './pages/Series'
import KingdomCross3F from './pages/KingdomCross3F'
import Formulario from './pages/Formulario'
import Testimony from './pages/Testimony'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<TheCarpenter />} />
        <Route path="/series" element={<Series />} />
        <Route path="/kingdom-cross-3f" element={<KingdomCross3F />} />
        <Route path="/request" element={<Formulario />} />
        <Route path="/testimony" element={<Testimony />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
