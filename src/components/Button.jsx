import WhatsappLogo from '../assets/icons/LogoWhatsappWhite.svg';

export function Button() {
  return (
    <a href="https://tailwindcss.com/docs/font-family" target="_blank" class='flex flex-col justify-center items-center w-40 h-20 bg-primary-orange text-white font-extrabold px-4 py-2 rounded-2xl hover:bg-green hover:shadow-md transition-all '>
      
      <img src={WhatsappLogo} alt="WhatsApp Logo" class='w-10'/>
      WHATSAPP
    </a>
  )
}