import Coqueiro from '../assets/Coqueiro.svg'
import Aviao from '../assets/Aviao.svg'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { gsap, ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export default function Viagens() {
  const coqueiroRef = useRef(null);
  const aviaoRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      coqueiroRef.current,
      { xPercent: -60, opacity: 0, scale: 0.95 },
      {
        xPercent: 0,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: '.viagens-section',
          start: 'top 85%',
          end: 'bottom bottom',
          scrub: .3,
        },
        ease: 'power1.out',
      }
    );

    gsap.fromTo(
      aviaoRef.current,
      { xPercent: 60, opacity: 0, scale: 0.95 },
      {
        xPercent: 0,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: '.viagens-section',
          start: 'top 85%',
          end: 'bottom bottom',
          scrub: .3,
        },
        ease: 'power1.out',
      }
    );
  }, []);

  return (
    <section className="viagens-section relative min-h-130 bg-primary-orange -mt-25 overflow-hidden">
      {/* background images positioned absolutely */}
      <div className="absolute inset-0 flex justify-between items-center pointer-events-none z-0">
        <img
          ref={coqueiroRef}
          src={Coqueiro}
          alt="Coqueiro"
          aria-hidden="true"
          className="absolute left-0 -translate-y-1/2 w-1/3 max-w-105 opacity-0 scale-95 pointer-events-none"
        />
        <img
          ref={aviaoRef}
          src={Aviao}
          alt="Avião"
          aria-hidden="true"
          className="absolute right-0 -translate-y-1/2 w-1/4 max-w-90 opacity-0 scale-95 pointer-events-none"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-7.5 h-full py-20">
        <h1 className='text-[32px] text-background font-light'>CONFIRA NOSSAS PRÓXIMAS VIAGENS</h1>
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full max-w-6xl"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4 ">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}