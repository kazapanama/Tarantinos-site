import './MobileMenu.css'

import {Link} from 'react-router-dom'

const MobileMenu = ({mobMenu, setMobMenu,setLanguage,language,translation}) => {
    return(
        <div className={mobMenu ? 'mobile-menu-bg active':'mobile-menu-bg'} onClick={()=>  setMobMenu(!mobMenu)}>
            <div className="mobile-menu" onClick={(e)=> e.stopPropagation()}>
               
               
                <div className='mobile-nav'>
                    <Link to="/" className='mobile-nav-link' onClick={()=>setMobMenu(!mobMenu)}>{translation.nav_main}</Link>
                    <Link to="/menu" className='mobile-nav-link' onClick={()=>setMobMenu(!mobMenu)}>{translation.nav_menu}</Link>
                    <Link to="/about" className='mobile-nav-link' onClick={()=>setMobMenu(!mobMenu)}>{translation.nav_about}</Link>
               
               
                </div>

                <div className='mobile-lang'>
                    <span className='mob-lang-change'>{translation.nav_choose}</span>
                    <span className={language === 'UA'? 'mob-lang choosed' : 'mob-lang'} onClick={()=>setLanguage('UA')}>Українська</span>
                    <span className={language === 'ENG'? 'mob-lang choosed' : 'mob-lang'} onClick={()=>setLanguage('ENG')}>English</span>
                </div>
                <div className='mobile-order'>
                    <span className='mobile-order-title'>{translation.nav_order}</span>
                    <a href="tel:+380-67-360-6003"className='mobile-order-number'>067 360 60 03</a>
                    <span className='mobile-order-date'>{translation.nav_hours}</span>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu