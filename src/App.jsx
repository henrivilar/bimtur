import './App.css'
import Hero from './sections/Hero.jsx'
import Navbar from './sections/Navbar.jsx'
import Viagens from './sections/Viagens.jsx'

export default function App() {
  return (
    <div class='bg-background font-rubik'>
      <Navbar />
      <Hero />
      <Viagens />
    </div>
  )
}
