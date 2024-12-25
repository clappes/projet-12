import Navigate from '../../components/Navigate/Navigate'
import logo from '../../assets/logo.svg'
import './Header.css'

function Header() {
    return (
        <header>
            <section className='logo'>
                <img src={logo} alt="Logo de l'entreprise SportSee" />
            </section>
            <section className='header-nav'>
                <Navigate />
            </section>
        </header>
    )
  }
  
  export default Header