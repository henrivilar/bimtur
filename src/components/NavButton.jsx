import WhatsappLogo from '../assets/icons/WhatsappAnimated.webm';
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const message = `Olá! 
Seja bem-vindo(a) à Bim Turismo! 
Em breve nossa equipe vai te responder.
Como podemos te ajudar?`;

const whatsappUrl = `https://wa.me/5588999063361?text=${encodeURIComponent(message)}`


export function Button() {
  return (
    <a href={whatsappUrl} target="_blank" class='flex flex-col justify-center items-center  w-40 h-20 md:w-28 md:h-14 bg-primary-orange text-white md:text-[14px] font-extrabold px-8 py-4 rounded-2xl hover:bg-green hover:shadow-md transition-all duration-200'>
      
      <DotLottieReact
      src="https://lottie.host/4e7158dc-ccbe-4a4d-bd7b-ef005931a631/C3hbxCBfoN.lottie"
      loop
      autoplay
      />
      WHATSAPP
    </a>
  )
}