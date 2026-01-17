import Ondas from '../assets/ondasRoxa.svg';
import OndasLaranja from '../assets/ondasLaranja.svg';
import { gsap, ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export default function Contatos() {

  const wavesRoxaRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(wavesRoxaRef.current, {
      xPercent: -50,
      duration: 12,
      ease: 'linear',
      repeat: -1,
    });
  }, []);

  return (
    <section className='relative w-full h-screen bg-primary-purple'>
      <div className='absolute w-full overflow-hidden top-0 bg-background'>
        <div ref={wavesRoxaRef} className='flex -mb-1'>
          <img src={Ondas} alt="" aria-hidden="true" className='min-w-full shrink-0' />
          <img src={Ondas} alt="" aria-hidden="true" className='min-w-full shrink-0' />
        </div>
      </div>
      <div className=''>
        <h1>CONTATOS</h1>
      </div>
    </section>
  )
}