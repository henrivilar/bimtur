import Logo from '../assets/images/Logo.png';
import { Button } from '../components/button.jsx';

export default function Navbar() {

  const linksStyle = 'px-[30px] py-[28px] border-b-4 border-b-primary-orange  hover:border-b-4 hover:text-primary-purple hover:border-b-primary-purple transition-all';

  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-background shadow-md'>
      <div className='flex justify-between items-center py-6 max-w-360 mx-auto px-6 md:px-12 xl:px-36'>
        <img src={Logo} alt="Logo" className='w-20 hover:scale-125' />

        <ul className='flex items-center h-full text-primary-orange font-light'>

          <li><a href='#' className={linksStyle}>VIAGENS</a></li>
          <li><a href='#' className={linksStyle}>QUEM SOMOS</a></li>
          <li><a href='#' className={linksStyle}>CLIENTES</a></li>
          <li><a href='#' className={linksStyle}>CONTATOS</a></li>
        </ul>

        <Button />
      </div>
    </nav>
  )
}