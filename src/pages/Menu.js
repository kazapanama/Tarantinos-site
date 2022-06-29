
import MenuList from "../components/MenuList/MenuList"
import RegularList from "../components/RegularList/RegularList"
import ImageList from "../components/ImageList/ImageList"


const Menu = ({menu}) =>{
   
   const {burgers,specials,sauses,sandwitches,hotDogs,fries,deserts,hotDrinks,coldDrinks,freshes,milkshakes,beers,whiskey,rum,cogniak,vodka,vermooth,redWine,whiteWine,champagne} = menu
   
    
    return(
        <>
            <MenuList />
            
            <ImageList items={burgers} idx='burgers' title='Бургери' currency='грн' unit='г'/>
            <ImageList items={specials} idx='specials' title='Спеціальна пропозиція' currency='грн' unit='г'/>
            <ImageList items={sandwitches} idx='sandwitches' title='Сендвічі' currency='грн' unit='г'/>
            <ImageList items={hotDogs} idx='hotDogs' title='Хот-доги' currency='грн' unit='г'/>
            <ImageList items={deserts} idx='deserts' title='Десерти' currency='грн' unit='г'/>
            <RegularList items={sauses} idx='sauses' title='Соуси' currency='грн' unit='г'/>
            <RegularList items={fries} idx='fries' title='Смаження' currency='грн' unit='г'/>
            <RegularList items={hotDrinks} idx='hotDrinks' title='Гарячі напої' currency='грн' unit='мл'/>
            <RegularList items={coldDrinks} idx='coldDrinks' title='Холодні напої' currency='грн' unit='л'/>
            <RegularList items={freshes} idx='freshes' title='Фреші' currency='грн' unit='мл'/>
            <RegularList items={milkshakes} idx='milkshakes' title='Мілкшейки' currency='грн' unit='мл'/>
            <RegularList items={beers} idx='beers' title='Пиво' currency='грн' unit='л'/>
            <RegularList items={whiskey} idx='stronger' title='Щось міцніше' currency='грн' unit='г'/>
            <RegularList items={rum} idx='run' title='Ром' currency='грн' unit='г'/>
            <RegularList items={cogniak} idx='cogniak' title='Коньяк' currency='грн' unit='г'/>
            <RegularList items={vodka} idx='vodka' title='Горілка' currency='грн' unit='г'/>
            <RegularList items={vermooth} idx='vermooth' title='Вермут' currency='грн' unit='г'/>
            <RegularList items={redWine} idx='redWine' title='Червоне вино' currency='грн' unit='г'/>
            <RegularList items={whiteWine} idx='whiteWine' title='Біле вино' currency='грн' unit='г'/>
            <RegularList items={champagne} idx='champagne' title='Шампанське' currency='грн' unit=''/>
           
        </>
    )
}

export default Menu