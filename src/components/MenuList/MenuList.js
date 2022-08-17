import './MenuList.css'
import { motion } from 'framer-motion';

const MenuList = ({translation}) => {
    
    
    const animStart = {
        hidden :{
            opacity:0,
            y:50,
        },
    
        visable : custom =>({
            opacity:1,
            y:0,
            transition:{duration:custom*0.4},
        })
    }
    
    
    
    return ( 
        <div id="menuList">
            <motion.h1 
             initial='hidden'
             whileInView='visable'
             variants={animStart}
             viewport={{once:true}}
             custom={2}
            className='menu-list-title'>{translation.nav_menu}</motion.h1>
            
            <motion.div 
            initial='hidden'
            whileInView='visable'
            variants={animStart}
            viewport={{once:true}}
            custom={2.5}
            
            className="wrapper">


        <div>
            <div className="menu-list-item">
                    <a href='#burgers'> 
                        <img className="menu-list-icon" src="./Images/menu/icons/burger.svg" alt='buger icon'/>
                        <span className="menu-list-name">{translation.menu_list_burgers}</span>
                    </a>
                </div>

                <div className="menu-list-item">
                    <a href='#specials'> 
                        <img className="menu-list-icon" src="./Images/menu/icons/special.svg" alt='buger icon'/>
                        <span className="menu-list-name">{translation.menu_list_special}</span>
                    </a>
                </div>

                <div className="menu-list-item">
                    <a href='#sandwitches'> 
                        <img className="menu-list-icon" src="./Images/menu/icons/sandwitch.svg" alt='buger icon'/>
                        <span className="menu-list-name">{translation.menu_list_sandwitches}</span>
                    </a>
                </div>

               

                <div className="menu-list-item">
                    <a href='#fries'> 
                        <img className="menu-list-icon" src="./Images/menu/icons/fries.svg" alt='buger icon'/>
                        <span className="menu-list-name">{translation.menu_list_fries}</span>
                    </a>
                </div>

                <div className="menu-list-item">
                    <a href='#sauses'> 
                        <img className="menu-list-icon" src="./Images/menu/icons/sause.svg" alt='sause icon'/>
                        <span className="menu-list-name">{translation.menu_list_sauses}</span>
                    </a>
                </div>

                <div className="menu-list-item">
                    <a href='#hotDrinks'> 
                        <img className="menu-list-icon" src="./Images/menu/icons/hot-drink.svg" alt='buger icon'/>
                        <span className="menu-list-name">{translation.menu_list_hotD}</span>
                    </a>
                </div>
                

        </div>

        <div>

                
            
        <div className="menu-list-item">
                <a href='#coldDrinks'> 
                    <img className="menu-list-icon" src="./Images/menu/icons/cold-drink.svg" alt='buger icon'/>
                    <span className="menu-list-name">{translation.menu_list_coldD}</span>
                </a>
            </div>

            <div className="menu-list-item">
                <a href='#freshes'> 
                    <img className="menu-list-icon" src="./Images/menu/icons/fresh.svg" alt='buger icon'/>
                    <span className="menu-list-name">{translation.menu_list_fresh}</span>
                </a>
            </div>

            <div className="menu-list-item">
                <a href='#milkshakes'> 
                    <img className="menu-list-icon" src="./Images/menu/icons/milkshake.svg" alt='buger icon'/>
                    <span className="menu-list-name">{translation.menu_list_milkshakes}</span>
                </a>
            </div>

            <div className="menu-list-item">
                <a href='#beers'> 
                    <img className="menu-list-icon" src="./Images/menu/icons/beer.svg" alt='buger icon'/>
                    <span className="menu-list-name">{translation.menu_list_beer}</span>
                </a>
            </div>

            <div className="menu-list-item">
                <a href='#stronger'> 
                    <img className="menu-list-icon" src="./Images/menu/icons/whiskey.svg" alt='buger icon'/>
                    <span className="menu-list-name">{translation.menu_list_strng}</span>
                </a>
            </div>
        
        
        </div>           

           

            </motion.div>
        </div>
     );
}
 
export default MenuList;