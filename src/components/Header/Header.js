import './Header.css'

import {Link} from 'react-router-dom'

const Header = ({mobMenu, setMobMenu, setLanguage,language,translation}) => {
    
    return(
        <header>
            <div className="wrapper">
                <Link to="/"><img src="./images/header/nav-logo.svg" className="navLogo" alt="tarantinos logo" title="tarantinos logo" onClick={()=>setMobMenu(false)}></img></Link> 
               
                <div className='desctop-nav'>
                    <nav>
                        <ul>
                            <li><Link to="/" className='nav-link'>{translation.nav_main}</Link></li>
                            <li><Link to="/menu" className='nav-link'>{translation.nav_menu}</Link></li>
                            <li><Link to="/about" className='nav-link'>{translation.nav_about}</Link></li>
                        </ul>
                    </nav>
                </div>

                <div className='desctop-lang'>
                    <span className={language === 'UA' ? 'lang choosed' : 'lang'} onClick={()=>setLanguage('UA')}>Українська</span>
                    <span className={language === 'ENG'? 'lang choosed' : 'lang'} onClick={()=>setLanguage('ENG')}>English</span>
                </div>

                <div className='desctop-header-social'>
                   
                    <div className='header-order'>
                        <span>{translation.nav_order}</span>
                        <a href="tel:067-360-6003">067 360 60 03</a>
                         <span>{translation.nav_hours}</span>
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