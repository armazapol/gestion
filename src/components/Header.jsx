
import Logo from '/img/Logo.svg'
import Menu from '/img/menu.svg'

const Header = () => {
  return (
    <div className="bg-primary px-5 py-2 flex justify-between">
        <img src={Logo} alt="" />
        <img src={Menu} alt="" />
    </div>
  )
}

export default Header