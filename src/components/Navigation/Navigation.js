import Header from "../Header/Header"
import MobileMenu from "../MobileMenu/MobileMenu"

const Navigation = ({mobMenu,setMobMenu,setLanguage,language,translation}) =>{
    return(
        <>
            <Header mobMenu={mobMenu} setMobMenu={setMobMenu} setLanguage={setLanguage} language={language} translation={translation}/>
            <MobileMenu mobMenu={mobMenu} setMobMenu={setMobMenu} setLanguage={setLanguage} language={language} translation={translation}/>
        </>
    )
}

export default Navigation