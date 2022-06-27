import Header from "../Header/Header"
import MobileMenu from "../MobileMenu/MobileMenu"

const Navigation = ({mobMenu,setMobMenu}) =>{
    return(
        <>
            <Header mobMenu={mobMenu} setMobMenu={setMobMenu}/>
            <MobileMenu mobMenu={mobMenu} setMobMenu={setMobMenu}/>
        </>
    )
}

export default Navigation