import './MenuList.css'

const MenuList = () => {
    return ( 
        <div id="menuList">
            <div className="wrapper">

            <h1 className='menu-list-title'>MЕНЮ</h1>

            <div className="menu-list-item">
                <a href='#burgers'> 
                    <img className="menu-list-icon" src="./Images/menu/icons/burger.svg" alt='buger icon'/>
                    <span className="menu-list-name">БУРГЕРИ</span>
                </a>
            </div>

            <div className="menu-list-item">
                <a href='#burgers'> 
                    <img className="menu-list-icon" src="./Images/menu/icons/special.svg" alt='buger icon'/>
                    <span className="menu-list-name">СПЕЦІАЛЬНІ ПРОПОЗИЦІЇ</span>
                </a>
            </div>

            <div className="menu-list-item">
                <a href='#burgers'> 
                    <img className="menu-list-icon" src="./Images/menu/icons/sandwitch.svg" alt='buger icon'/>
                    <span className="menu-list-name">СЕНДВІЧІ</span>
                </a>
            </div>

            <div className="menu-list-item">
                <a href='#burgers'> 
                    <img className="menu-list-icon" src="./Images/menu/icons/hot-dog.svg" alt='buger icon'/>
                    <span className="menu-list-name">ХОТ-ДОГИ</span>
                </a>
            </div>

            <div className="menu-list-item">
                <a href='#burgers'> 
                    <img className="menu-list-icon" src="./Images/menu/icons/fries.svg" alt='buger icon'/>
                    <span className="menu-list-name">СМАЖЕНІ СТРАВИ</span>
                </a>
            </div>

            <div className="menu-list-item">
                <a href='#sauses'> 
                    <img className="menu-list-icon" src="./Images/menu/icons/sause.svg" alt='sause icon'/>
                    <span className="menu-list-name">СОУСИ</span>
                </a>
            </div>

            <div className="menu-list-item">
                <a href='#burgers'> 
                    <img className="menu-list-icon" src="./Images/menu/icons/desert.svg" alt='buger icon'/>
                    <span className="menu-list-name">ДЕСЕРТИ</span>
                </a>
            </div>

            <div className="menu-list-item">
                <a href='#burgers'> 
                    <img className="menu-list-icon" src="./Images/menu/icons/hot-drink.svg" alt='buger icon'/>
                    <span className="menu-list-name">ГАРЯЧІ НАПОЇ</span>
                </a>
            </div>

            <div className="menu-list-item">
                <a href='#burgers'> 
                    <img className="menu-list-icon" src="./Images/menu/icons/cold-drink.svg" alt='buger icon'/>
                    <span className="menu-list-name">ХОЛОДНІ НАПОЇ</span>
                </a>
            </div>

            <div className="menu-list-item">
                <a href='#burgers'> 
                    <img className="menu-list-icon" src="./Images/menu/icons/fresh.svg" alt='buger icon'/>
                    <span className="menu-list-name">ФРЕШІ</span>
                </a>
            </div>

            <div className="menu-list-item">
                <a href='#burgers'> 
                    <img className="menu-list-icon" src="./Images/menu/icons/milkshake.svg" alt='buger icon'/>
                    <span className="menu-list-name">МОЛОЧНІ КОКТЕЙЛІ</span>
                </a>
            </div>

            <div className="menu-list-item">
                <a href='#burgers'> 
                    <img className="menu-list-icon" src="./Images/menu/icons/beer.svg" alt='buger icon'/>
                    <span className="menu-list-name">ПИВО</span>
                </a>
            </div>

            <div className="menu-list-item">
                <a href='#burgers'> 
                    <img className="menu-list-icon" src="./Images/menu/icons/whiskey.svg" alt='buger icon'/>
                    <span className="menu-list-name">ЩОСЬ МІЦНІШЕ</span>
                </a>
            </div>

            </div>
        </div>
     );
}
 
export default MenuList;