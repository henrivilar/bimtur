import SectionBG from '../assets/sectionBG.png';
import QuemSomosCard from '../components/QuemSomosCard.jsx';
import Bus from '../assets/icons/Bus.svg';
import RoundedPushpin from '../assets/icons/RoundPushpin.svg';
import Hotel from '../assets/icons/Hotel.svg';
import Star from '../assets/icons/Star.svg';
import Card1 from '../assets/images/Card1.svg';
import Card2 from '../assets/images/Card2.svg';
import Card3 from '../assets/images/Card3.svg';
import { gsap, ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';


export default function QuemSomos() {

  const BGRef = useRef(null);
  const titulo1Ref = useRef(null);
  const textoRef = useRef(null);
  const titulo2Ref = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      BGRef.current,
      { yPercent: -60, opacity: 0, scale: 0.95 },
      {
        yPercent: 0,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: '.quem-somos',
          start: 'top 85%',
          end: 'bottom bottom',
          scrub: .3,
        },
        ease: 'power1.out',
      }
    );

    gsap.fromTo(
      titulo1Ref.current,
      { yPercent: 60, opacity: 0, scale: 0.95 },
      {
        yPercent: 0,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: '.quem-somos',
          start: 'top 95%',
          end: 'bottom bottom',
          scrub: .3,
        },
        ease: 'power1.out',
      }
    );

    gsap.fromTo(
      textoRef.current,
      { yPercent: 60, opacity: 0, scale: 0.95 },
      {
        yPercent: 0,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: '.quem-somos',
          start: 'top 95%',
          end: 'bottom bottom',
          scrub: .3,
        },
        ease: 'power1.out',
      }
    );

    gsap.fromTo(
      '.quem-somos .card-item',
      { xPercent: -100, yPercent: 60, opacity: 0, scale: 0.95 },
      {
        xPercent: 0,
        yPercent: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.2,
        delay: 0.2,
        scrollTrigger: {
          trigger: '.quem-somos',
          start: 'top 75%',
          end: 'top 30%',
          scrub: .3,
        },
        ease: 'power1.out',
      }
    );

    gsap.fromTo(
      titulo2Ref.current,
      { yPercent: 60, opacity: 0, scale: 0.95 },
      {
        yPercent: 0,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: '.feedback',
          start: 'top 95%',
          end: 'bottom bottom',
          scrub: .3,
        },
        ease: 'power1.out',
      }
    );

    gsap.fromTo(
      '.feedback .card-item',
      { xPercent: 100, yPercent: 60, opacity: 0, scale: 0.95 },
      {
        xPercent: 0,
        yPercent: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.feedback',
          start: 'top 95%',
          end: 'bottom bottom',
          scrub: .3,
        },
        ease: 'power1.out',
      }
    );

  }, []);

  return (
    <section id='QuemSomos' className="relative w-full h-full max-w-360 mx-auto bg-background flex flex-col items-center justify-center overflow-hidden scroll-mt-20">
      <div ref={BGRef} className="absolute inset-0">
        <img
          src={SectionBG}
          alt="Imagem Background"
          className='w-full h-full object-cover'>
        </img>
      </div>
      <div className='quem-somos relative z-10 mt-8.5 mb-13 flex flex-col items-center gap-6'>
        <h2 ref={titulo1Ref} className='text-primary-orange text-[32px] font-light'>POR QUE VIAJAR COM A BIM TURISMO?</h2>
        <p ref={textoRef} className='max-w-190 text-center text-text-gray'>Fundada em 1999 no coração do Cariri, em Juazeiro do Norte, a <span className='font-bold'>Bim Turismo</span> é uma agência especializada em viagens e excursões que transforma cada roteiro em uma experiência inesquecível. Com mais de duas décadas de atuação, oferecemos excursões organizadas, hotéis cuidadosamente selecionados e destinos incríveis pelo Nordeste, além de viagens nacionais e internacionais na América do Sul. Tudo isso com atendimento próximo, segurança e a confiança de milhares de clientes satisfeitos ao longo dos anos.</p>
        <div className='quem-somos flex gap-6 cards-container'>
          <div className='card-item'>
            <QuemSomosCard
              icon={Bus}
              texto="Excursões Organizadas"
              textoVerso="Viagens planejadas com perfeição e conforto para sua família"
            />
          </div>
          <div className='card-item'>
            <QuemSomosCard
              icon={RoundedPushpin}
              texto="Destinos Incríveis"
              textoVerso="Explore os melhores lugares do Nordeste e além"
            />
          </div>
          <div className='card-item'>
            <QuemSomosCard
              icon={Hotel}
              texto="Hotéis Selecionados"
              textoVerso="Hospedagens de qualidade em locais estratégicos"
            />
          </div>
          <div className='card-item'>
            <QuemSomosCard
              icon={Star}
              texto="Experiência Desde 1999"
              textoVerso="Mais de 20 anos de tradição e confiança"
            />
          </div>
        </div>
      </div>
      <div id='Clientes' className='feedback relative z-10 mt-8.5 mb-13 flex flex-col items-center gap-6 scroll-mt-20'>
        <h2 ref={titulo2Ref} className='text-primary-orange text-[32px] font-light'>FEEDBACK DOS CLIENTES</h2>
        <div className='flex gap-6 cards-container'>
          <div className='card-item'>
            <img
              src={Card1}
              alt="Card Cliente 1"
              className='rounded-xl shadow-xl hover:scale-105 transition-all duration-200' />
          </div>
          <div className='card-item'>
            <img
              src={Card2}
              alt="Card Cliente 2"
              className='rounded-xl shadow-xl hover:scale-105 transition-all duration-200' />
          </div>
          <div className='card-item'>
            <img
              src={Card3}
              alt="Card Cliente 3"
              className='rounded-xl shadow-xl hover:scale-105 transition-all duration-200' />
          </div>
        </div>
      </div>
    </section>
  )
}