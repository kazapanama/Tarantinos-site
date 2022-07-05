
import MenuList from "../components/MenuList/MenuList"
import RegularList from "../components/RegularList/RegularList"
import ImageList from "../components/ImageList/ImageList"
import ArrowToTop from '../components/ArrowToTop/ArrowToTop'


const Menu = ({menu,translation}) =>{
   
   const {burgers,specials,sauses,sandwitches,hotDogs,fries,deserts,hotDrinks,coldDrinks,freshes,milkshakes,beers,whiskey,rum,cogniak,vodka,vermooth,redWine,whiteWine,champagne} = menu
   
    
    return(
        <>
        
            <MenuList translation={translation}/>
            
            
            
            <ImageList items={burgers} idx='burgers' title={translation.menu_list_burgers} currency={translation.menu_unit_grn} unit={translation.menu_unit_gram}/>
            <ImageList items={specials} idx='specials' title={translation.menu_list_special} currency={translation.menu_unit_grn} unit={translation.menu_unit_gram}/>
            <ImageList items={sandwitches} idx='sandwitches' title={translation.menu_list_sandwitches} currency={translation.menu_unit_grn} unit={translation.menu_unit_gram}/>
            <ImageList items={hotDogs} idx='hotDogs' title={translation.menu_list_hotDogs} currency={translation.menu_unit_grn} unit={translation.menu_unit_gram}/>
            <ImageList items={deserts} idx='deserts' title={translation.menu_list_deserts} currency={translation.menu_unit_grn} unit={translation.menu_unit_gram}/>
            <RegularList items={sauses} idx='sauses' title={translation.menu_list_sauses} currency={translation.menu_unit_grn} unit={translation.menu_unit_gram}/>
            <RegularList items={fries} idx='fries' title={translation.menu_list_fries} currency={translation.menu_unit_grn} unit={translation.menu_unit_gram}/>
            <RegularList items={hotDrinks} idx='hotDrinks' title={translation.menu_list_hotD} currency={translation.menu_unit_grn} unit={translation.menu_unit_ml}/>
            <RegularList items={coldDrinks} idx='coldDrinks' title={translation.menu_list_coldD} currency={translation.menu_unit_grn} unit={translation.menu_unit_litr}/>
            <RegularList items={freshes} idx='freshes' title={translation.menu_list_fresh} currency={translation.menu_unit_grn} unit={translation.menu_unit_ml}/>
            <RegularList items={milkshakes} idx='milkshakes' title={translation.menu_list_milkshakes} currency={translation.menu_unit_grn} unit={translation.menu_unit_ml}/>
            <RegularList items={beers} idx='beers' title={translation.menu_list_beer} currency={translation.menu_unit_grn} unit={translation.menu_unit_ml}/>
            <RegularList items={whiskey} idx='stronger' title={translation.menu_list_strng} currency={translation.menu_unit_grn} unit={translation.menu_unit_ml}/>
            <RegularList items={rum} idx='rum' title={translation.menu_list_rum} currency={translation.menu_unit_grn} unit={translation.menu_unit_ml}/>
            <RegularList items={cogniak} idx='cogniak' title={translation.menu_list_cogniac} currency={translation.menu_unit_grn} unit={translation.menu_unit_ml}/>
            <RegularList items={vodka} idx='vodka' title={translation.menu_list_vodka} currency={translation.menu_unit_grn} unit={translation.menu_unit_ml}/>
            <RegularList items={vermooth} idx='vermooth' title={translation.menu_list_vermooth} currency={translation.menu_unit_grn} unit={translation.menu_unit_ml}/>
            <RegularList items={redWine} idx='redWine' title={translation.menu_list_redWine} currency={translation.menu_unit_grn} unit={translation.menu_unit_ml}/>
            <RegularList items={whiteWine} idx='whiteWine' title={translation.menu_list_whiteWine} currency={translation.menu_unit_grn} unit={translation.menu_unit_ml}/>
            <RegularList items={champagne} idx='champagne' title={translation.menu_list_champagne} currency={translation.menu_unit_grn} unit=''/>
           

            <ArrowToTop />
        </>
    )
}

export default Menu