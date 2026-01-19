import '../App.css'
import { useState } from 'react'
import LoadingScreen from '../components/LoadingScreen.jsx'
import Hero from '../sections/Hero.jsx'
import Navbar from '../sections/Navbar.jsx'
import Viagens from '../sections/Viagens.jsx'
import QuemSomos from '../sections/QuemSomos.jsx'
import Contatos from '../sections/Contatos.jsx'

export default function DesktopLayout() {

  const [showLoading, setShowLoading] = useState(true)

  const handleLoadingComplete = () => {
    setShowLoading(false)
  }

  return (
    <div class='bg-background font-rubik'>
      {showLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <Navbar />
      <Hero />
      <Viagens />
      <QuemSomos />
      <Contatos />
    </div>
  )
}