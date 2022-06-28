
import MenuList from "../components/MenuList/MenuList"
import RegularList from "../components/RegularList/RegularList"
import ImageList from "../components/ImageList/ImageList"


const Menu = ({menu}) =>{
   
   const {burgers,specials,sauses,sandwitches,hotDogs,fries,deserts,hotDrinks,coldDrinks,freshes,milkshakes,beers,whiskey,rum,cogniak,vodka,vermooth,redWine,whiteWine,champagne} = menu
   
    
    return(
        <>
            <MenuList />
            
            <ImageList items={burgers} idx='burgers' title='Бургери'/>
            <ImageList items={specials} idx='specials' title='Спеціальна пропозиція'/>
            <ImageList items={sandwitches} idx='sandwitches' title='Сендвічі'/>
            <ImageList items={hotDogs} idx='hotDogs' title='Хот-доги'/>
            <ImageList items={deserts} idx='deserts' title='Десерти'/>
            <RegularList items={sauses} idx='sauses' title='Соуси'/>
            <RegularList items={fries} idx='fries' title='Смаження'/>
            <RegularList items={hotDrinks} idx='hotDrinks' title='Гарячі напої'/>
            <RegularList items={coldDrinks} idx='coldDrinks' title='Холодні напої'/>
            <RegularList items={freshes} idx='freshes' title='Фреші'/>
            <RegularList items={milkshakes} idx='milkshakes' title='Мілкшейки'/>
            <RegularList items={beers} idx='beers' title='Пиво'/>
            <RegularList items={whiskey} idx='stronger' title='Щось міцніше'/>
            <RegularList items={rum} idx='run' title='Ром'/>
            <RegularList items={cogniak} idx='cogniak' title='Коньяк'/>
            <RegularList items={vodka} idx='vodka' title='Горілка'/>
            <RegularList items={vermooth} idx='vermooth' title='Вермут'/>
            <RegularList items={redWine} idx='redWine' title='Червоне вино'/>
            <RegularList items={whiteWine} idx='whiteWine' title='Біле вино>'/>
            <RegularList items={champagne} idx='champagne' title='Шампанське'/>
           
        </>
    )
}

export default Menu