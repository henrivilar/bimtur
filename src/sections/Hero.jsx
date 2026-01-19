import heroVideo from '../assets/videos/heroVideoBackground.mp4';
import Ondas from '../assets/ondasLaranja.svg';
import { gsap, ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export default function Hero() {
  const textRef = useRef(null);
  const wavesRef = useRef(null);

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

    gsap.to(wavesRef.current, {
      xPercent: -50,
      duration: 12,  
      ease: 'linear',
      repeat: -1,
    });
  }, []);

  return (
    <section id='Hero' className='hero-section relative h-screen w-full overflow-hidden'>
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
        className="relative z-10 flex flex-col h-full items-center justify-end text-white xl:pb-20 2xl:pb-40">
        <h1 className="text-6xl xl:text-secondary-orange md:text-primary-orange font-dynapuff font-bold">
          Viajar é Viver
        </h1>
        <h4 className='font-dynapuff'>Excursões e pacotes especiais com a Bim Turismo</h4>
      </div>

      <div className='absolute xl:bottom-24 md:bottom-16.5 w-full overflow-hidden'>
        <div ref={wavesRef} className='flex'>
          <img src={Ondas} alt="" aria-hidden="true" className='min-w-full shrink-0'/>
          <img src={Ondas} alt="" aria-hidden="true" className='min-w-full shrink-0'/>
        </div>
      </div>
    </section>
  )
}