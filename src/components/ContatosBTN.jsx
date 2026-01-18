export default function ContatosBTN({ icon, text, link }) {
  return (
    <a 
      href={link} 
      target="_blank"
      class='bg-background text-[24px] text-text-gray flex justify-start items-center gap-6 px-8 py-4 rounded-2xl'>
        <img src={icon} alt={text}></img>
        {text}
    </a>
  )
}