
import MenuList from "../components/MenuList/MenuList"
import Burgers from "../components/menuComponents/Burgers/Burgers"
import Sauses from "../components/menuComponents/Sauses/Sauses"
import Specials from "../components/menuComponents/Specials/Specials"

const Menu = ({menu}) =>{
   
   
   
    
    return(
        <>
            <MenuList />
            
            <Burgers menu={menu}/>
            <Sauses menu={menu}/>
            <Specials  menu={menu}/>
        </>
    )
}

export default Menu