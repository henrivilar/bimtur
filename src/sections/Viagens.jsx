import Coqueiro from '../assets/Coqueiro.svg'
import Aviao from '../assets/Aviao.svg'
import { gsap, ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export default function Viagens() {
  const coqueiroRef = useRef(null);
  const aviaoRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(coqueiroRef.current, 
      { xPercent: -50 },
      {
        xPercent: 0,
        scrollTrigger: {
          trigger: '.viagens-section',
          start: 'top 70%',
          end: 'bottom top',
          scrub: .3,
        },
        ease: 'power1.out',
    }
  );

    gsap.fromTo(aviaoRef.current, 
      { xPercent: 50 },
      {
        xPercent: 0, 
        scrollTrigger: {
          trigger: '.viagens-section', 
          start: 'top 70%',
          end: 'bottom top',
          scrub: .3,
        },
        ease: 'power1.out',
      }
    );
  }, []);

  return (
    <section className="viagens-section h-full bg-primary-orange -mt-25 overflow-x-hidden ">
      <div className='flex justify-between py-10'>
        <img 
          ref={coqueiroRef}
          src={Coqueiro} 
          alt="Coqueiro" 
          className='coqueiro'
        />
        <img 
          ref={aviaoRef}
          src={Aviao} 
          alt="Avião" 
          className='aviao'
        />
      </div>
      
    </section>
  );
}