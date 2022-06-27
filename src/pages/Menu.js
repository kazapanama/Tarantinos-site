
import MenuList from "../components/MenuList/MenuList"
import Burgers from "../components/menuComponents/Burgers/Burgers"

const Menu = ({menu}) =>{
   
   
   console.log(menu)
    
    return(
        <>
            <MenuList />
            <Burgers menu={menu}/>
        </>
    )
}

export default Menu