import './MenuList.css'

const MenuList = ({translation}) => {
    return ( 
        <div id="menuList">
            <h1 className='menu-list-title'>{translation.nav_menu}</h1>
            <div className="wrapper">


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
                    <a href='#hotDogs'> 
                        <img className="menu-list-icon" src="./Images/menu/icons/hot-dog.svg" alt='buger icon'/>
                        <span className="menu-list-name">{translation.menu_list_hotDogs}</span>
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
                    <a href='#deserts'> 
                        <img className="menu-list-icon" src="./Images/menu/icons/desert.svg" alt='buger icon'/>
                        <span className="menu-list-name">{translation.menu_list_deserts}</span>
                    </a>
                </div>

                

        </div>

        <div>

        <div className="menu-list-item">
                    <a href='#hotDrinks'> 
                        <img className="menu-list-icon" src="./Images/menu/icons/hot-drink.svg" alt='buger icon'/>
                        <span className="menu-list-name">{translation.menu_list_hotD}</span>
                    </a>
                </div>
            
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

           

            </div>
        </div>
     );
}
 
export default MenuList;