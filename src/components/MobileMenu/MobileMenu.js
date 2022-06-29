import './MobileMenu.css'

import {Link} from 'react-router-dom'

const MobileMenu = ({mobMenu, setMobMenu}) => {
    return(
        <div className={mobMenu ? 'mobile-menu-bg active':'mobile-menu-bg'} onClick={()=>  setMobMenu(!mobMenu)}>
            <div className="mobile-menu" onClick={(e)=> e.stopPropagation()}>
               
               
                <div className='mobile-nav'>
                    <Link to="/" className='mobile-nav-link' onClick={()=>setMobMenu(!mobMenu)}>ГОЛОВНА</Link>
                    <Link to="/menu" className='mobile-nav-link' onClick={()=>setMobMenu(!mobMenu)}>МЕНЮ</Link>
                    <Link to="/about" className='mobile-nav-link' onClick={()=>setMobMenu(!mobMenu)}>ПРО НАС</Link>
               
               
                </div>

                <div className='mobile-lang'>
                    <span className='mob-lang-change'>Змінити мову</span>
                    <span className='mob-lang choosed'>Українська</span>
                    <span className='mob-lang'>English</span>
                </div>
                <div className='mobile-order'>
                    <span className='mobile-order-title'>Доставка</span>
                    <a href="tel:380-388-3333"className='mobile-order-number'>+380 555 35 35</a>
                    <span className='mobile-order-date'>працює з 12:00 до 22:00</span>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu