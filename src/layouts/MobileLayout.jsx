import Logo from '../assets/images/Logo.jpg'
import PalmTree from '../assets/icons/palm-tree.png'
import Airplane from '../assets/icons/airplane.png'
import SpeechBallon from '../assets/icons/speech-balloon.png'
import Camera from '../assets/icons/camera.png'
import Start from '../assets/icons/star.png'
import RoundPushpin from '../assets/icons/round-pushpin.png'

const message = `Olá! 
Seja bem-vindo(a) à Bim Turismo! 
Em breve nossa equipe vai te responder.
Como podemos te ajudar?`;

const whatsappUrl = `https://wa.me/5588999063361?text=${encodeURIComponent(message)}`

export default function MobileLayout() {
  return (
    <main className="min-h-screen bg-background font-rubik flex flex-col items-center px-6 py-10  text-text-gray">

      <img src={Logo} className="w-28 mb-6 rounded-full" />

      <div className='flex items-center'>
        <h1 className="text-4xl font-semibold mr-2">
        Bim Turismo 
        </h1>
        <img src={PalmTree} className='w-8'></img>
        <img src={Airplane} className='w-8'></img>
      </div>

      <h3 className='mb-2 text-xl font-medium'>@bimturismo</h3>

      <p className="text-center text-gray-500 mb-8">
        Viagens e excursões desde 1999
      </p>

      <div className="w-full space-y-4 text-center text-background">
        <a href={whatsappUrl} className="flex justify-center items-center gap-4 py-2 rounded-xl bg-primary-purple text-xl shadow-lg">
          <img 
            src={SpeechBallon}
            className='w-8'>
          </img>
          WhatsApp
        </a>

        <a href='https://www.instagram.com/bimtur/' className="flex justify-center items-center gap-4 py-2 rounded-xl bg-primary-purple text-xl shadow-lg">
          <img 
            src={Camera}
            className='w-8'>
          </img>
          Instagram
        </a>

        <a href='https://www.google.com/maps/place/Bim+Turismo/@-7.2060274,-39.3169199,17z/data=!3m1!4b1!4m6!3m5!1s0x7a178ab3f68ddbb:0xbd45f6c594fcf639!8m2!3d-7.2060274!4d-39.3169199!16s%2Fg%2F1tlbpbvy?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D' className="flex justify-center items-center gap-4 py-2 rounded-xl bg-primary-purple text-xl shadow-lg">
          <img 
            src={Start}
            className='w-8'>
          </img>
          Avalie Nossos Serviços
        </a>

        <a href='https://maps.app.goo.gl/wtKQ33BsgmdFWrdj8' className="flex justify-center items-center gap-4 py-2 rounded-xl bg-primary-purple text-xl shadow-lg">
          <img 
            src={RoundPushpin}
            className='w-8'>
          </img>
          Localização
        </a>
        
      </div>

    </main>
  )
}