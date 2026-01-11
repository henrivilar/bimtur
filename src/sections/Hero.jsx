import heroVideo from '../assets/videos/heroVideoBackground.mp4';
import Ondas from '../assets/ondasLaranja.svg';

export default function Hero() {
  return (
    <section className='relative h-screen w-full overflow-hidden'>
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-[90%] object-cover"
      />

      <div className="relative z-10 flex flex-col h-full items-center justify-end text-white pb-60">
        <h1 className="text-6xl text-secondary-orange font-dynapuff font-bold">
          Viajar é Viver
        </h1>
        <h4 className='font-dynapuff'>Excursões e pacotes especiais com a Bim Turismo</h4>
      </div>

      <img src={Ondas} alt="Ondas Laranja" className='absolute bottom-24 w-full'/>
    </section>
  )
}