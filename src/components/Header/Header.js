import './Header.css'

import {Link} from 'react-router-dom'

const Header = ({mobMenu, setMobMenu}) => {
    return(
        <header>
            <div className="wrapper">
                <a href="/"><img src="./images/header/nav-logo.svg" className="navLogo" alt="tarantinos logo"></img></a> 
               
                <div className='desctop-nav'>
                    <nav>
                        <ul>
                            <li><Link to="/" className='nav-link'>ГОЛОВНА</Link></li>
                            <li><Link to="/menu" className='nav-link'>МЕНЮ</Link></li>
                            <li><Link to="/about" className='nav-link'>ПРО НАС</Link></li>
                        </ul>
                    </nav>
                </div>

                <div className='desctop-lang'>
                    <span>Українська</span>
                    <span>English</span>
                </div>

                <img src="./images/header/burger-icon.svg" className="burger" onClick={()=>setMobMenu(!mobMenu)}/>
            </div>
           
        </header>
    )
}

export default Header