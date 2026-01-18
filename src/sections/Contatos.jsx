import Ondas from '../assets/ondasRoxa.svg';
import Coqueiro from '../assets/Coqueiro.svg';
import Aviao from '../assets/Aviao.svg';
import WhatsappLogo from '../assets/icons/WhatsappLogo.svg';
import InstagramLogo from '../assets/icons/InstagramLogo.svg';
import EmailLogo from '../assets/icons/EmailLogo.svg';
import ContatosBTN from '@/components/ContatosBTN.jsx';
import { gsap, ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const message = `Olá! 
Seja bem-vindo(a) à Bim Turismo! 
Em breve nossa equipe vai te responder.
Como podemos te ajudar?`;

const whatsappUrl = `https://wa.me/5588999063361?text=${encodeURIComponent(message)}`
const instagramUrl = 'https://www.instagram.com/bimtur/'

export default function Contatos() {

  const wavesRoxaRef = useRef(null);
  const aviaoRef = useRef(null);
  const coqueiroRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      aviaoRef.current,
      { xPercent: 60, opacity: 0, scale: 0.95 },
      {
        xPercent: 0,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: '.contatos',
          start: 'top 85%',
          end: 'bottom bottom',
          scrub: .3,
        },
        ease: 'power1.out',
      }
    );

    gsap.fromTo(
      coqueiroRef.current,
      { xPercent: -60, opacity: 0, scale: 0.95 },
      {
        xPercent: 0,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: '.contatos',
          start: 'top 85%',
          end: 'bottom bottom',
          scrub: .3,
        },
        ease: 'power1.out',
      }
    );

    gsap.to(wavesRoxaRef.current, {
      xPercent: -50,
      duration: 12,
      ease: 'linear',
      repeat: -1,
    });
  }, []);

  return (
    <section className='contatos relative w-full min-h-150 bg-primary-purple overflow-hidden '>
      <div className='absolute w-full overflow-hidden top-0 bg-background'>
        <div ref={wavesRoxaRef} className='flex -mb-1'>
          <img src={Ondas} alt="" aria-hidden="true" className='min-w-full shrink-0' />
          <img src={Ondas} alt="" aria-hidden="true" className='min-w-full shrink-0' />
        </div>
      </div>

      <div className="absolute top-40 inset-0 flex justify-between items-center pointer-events-none z-0">
        <img
          ref={aviaoRef}
          src={Aviao}
          alt="Avião"
          aria-hidden="true"
          className="absolute right-0 -translate-y-1/2 w-1/4 max-w-90 opacity-0 scale-95 pointer-events-none"
        />
        <img
          ref={coqueiroRef}
          src={Coqueiro}
          alt="Coqueiro"
          aria-hidden="true"
          className="absolute left-0 -translate-y-1/2 w-1/3 max-w-105 opacity-0 scale-95 pointer-events-none"
        />
      </div>

      <div className='relative z-10 flex flex-col justify-center items-center gap-6 top-26 max-w-360 mx-auto'>
        <h1 className='text-background text-[32px] font-light'>CONTATOS</h1>
        <div className='flex items-center gap-30.5'>
          <div className='buttons flex flex-col gap-7'>
            <ContatosBTN 
              link={whatsappUrl}
              icon={WhatsappLogo}
              text='WHATSAPP'
            />
            <ContatosBTN 
              link={instagramUrl}
              icon={InstagramLogo}
              text='INSTAGRAM'
            />
            <ContatosBTN 
              icon={EmailLogo}
              text='EMAIL'
            />
          </div>

          <div>
            <p className='bg-background text-text-gray px-2 py-1 rounded-md mb-2'>Rua São Paulo, 715 - Centro, Juazeiro do Norte - CE</p>
            <div className="w-100 h-75 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.304784317347!2d-39.316919899999995!3d-7.206027400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a178ab3f68ddbb%3A0xbd45f6c594fcf639!2sBim%20Turismo!5e0!3m2!1spt-BR!2sbr!4v1768690159892!5m2!1spt-BR!2sbr"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Bim Turismo"
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center gap-6'>
          <div className='w-239 h-0.5 bg-background'></div>
          <p className='text-background'>© 1999 – 2026 • Bim Turismo • Todos os direitos reservados</p>
        </div>
      </div>

      
    </section>
  )
}