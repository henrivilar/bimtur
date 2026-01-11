import Coqueiro from '../assets/Coqueiro.svg'
import Aviao from '../assets/Aviao.svg'

export default function Viagens() {
  return (
    <section className="h-full bg-primary-orange -mt-25">
      <div className='flex justify-between py-10'>
        <img src={Coqueiro} alt="Coqueiro" />
        <img src={Aviao} alt="Avião" />
      </div>
      
    </section>
  );
}