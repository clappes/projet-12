import { Link } from 'react-router-dom'

import './Navigate.css'

function Navigate() {
    return (
        <nav className='nav'> 
            <Link to="/">Accueil</Link>
            <Link to="/*">Profil</Link>
            <Link to="/*">Réglage</Link>
            <Link to="/*">Communauté</Link>
          </nav>
    )
  }
  
  export default Navigate