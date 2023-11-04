import Logo from '/img/Logo.svg';

const Footer = () => {
  return (
    <div className='bg-primary p-5 justify-between flex items-start'>
      <img src={Logo} alt="" />
      <div className='text-sm flex flex-col gap-3 text-right'>
        <a className='color-secondary' href="">Iniciar Sesión</a>
        <a className='color-secondary' href="">Soluciones</a>
        <a className='color-secondary' href="">Contáctenos</a>
      </div>
    </div>
  )
}

export default Footer