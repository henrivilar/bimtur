import { useState } from 'react';

export default function QuemSomosCard({ icon, texto, textoVerso }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-67.5 h-42 cursor-pointer perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      style={{
        perspective: '1000px',
      }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Frente do card */}
        <div
          className="absolute w-full h-full bg-white rounded-xl shadow-xl flex flex-col items-center justify-center p-4"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img src={icon} alt="Ícone" />
          <p className="max-w-[70%] text-[24px] font-medium text-center">{texto}</p>
        </div>

        {/* Verso do card */}
        <div
          className="absolute w-full h-full bg-primary-orange rounded-xl shadow-xl flex flex-col items-center justify-center p-4"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <p className="max-w-[70%] text-[18px] font-medium text-center text-white">
            {textoVerso || 'Conteúdo do verso'}
          </p>
        </div>
      </div>
    </div>
  );
}