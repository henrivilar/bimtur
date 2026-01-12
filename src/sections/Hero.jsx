import heroVideo from '../assets/videos/heroVideoBackground.mp4';
import Ondas from '../assets/ondasLaranja.svg';
import { gsap, ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export default function Hero() {
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(textRef.current, {
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: .3,
      },
      y: -300,
      scale:1.5,
      ease: 'none',
    });
  }, []);

  return (
    <section className='hero-section relative h-screen w-full overflow-hidden'>
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-[90%] object-cover"
      />

      <div 
        ref={textRef} 
        className="relative z-10 flex flex-col h-full items-center justify-end text-white pb-60 md:pb-20">
        <h1 className="text-6xl text-primary-orange font-dynapuff font-bold">
          Viajar é Viver
        </h1>
        <h4 className='font-dynapuff'>Excursões e pacotes especiais com a Bim Turismo</h4>
      </div>

      <img 
        src={Ondas} 
        alt="Ondas Laranja" 
        className='absolute bottom-24 md:bottom-16.5 w-full'/>
    </section>
  )
}