import './Header.css'

import {Link} from 'react-router-dom'

const Header = ({mobMenu, setMobMenu}) => {
    return(
        <header>
            <div className="wrapper">
                <Link to="/"><img src="./images/header/nav-logo.svg" className="navLogo" alt="tarantinos logo"></img></Link> 
               
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
                    <span className='lang checked '>Українська</span>
                    <span className='lang'>English</span>
                </div>

                <div className='desctop-header-social'>
                   
                    <div className='header-order'>
                        <span>Доставка</span>
                        <a href="tel:380-800-7890">+380 800 55 35</a>
                         <span>11:00 - 20:00 | ПН - НД</span>
                     </div>

                </div>

                <img src="./images/header/burger-icon.svg" 
                alt="burger navigation icon"
                className="burger" 
                onClick={()=>setMobMenu(!mobMenu)}
                
                />
            </div>
           
        </header>
    )
}

export default Header