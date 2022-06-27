import './Specials.css'

const Specials = ({menu}) => {
    
    const {specials} = menu
    return ( 
        <seciton id="specials">
            <h2 className='burges-title'>Спеціальна пропозиція</h2>
            <div className="wrapper">

            {specials && specials.map(special=>{
                return(
                    special.img ?
                    <>
                        <div className="special-item-with-img"  key={special.id}>
                            {special.img && <img src={special.img} className='special-img'alt={special.name} />}
                            
                            
                                <span className='special-title-for-img'>{special.name}</span>
                            
                            <div className="special-item-with-img-wrapper">
                                <span className='special-text-with-img'>{special.price}грн</span>
                                <span className='special-text-with-img'>{special.weight}грн</span>
                            </div>
                            
                        </div>
                        <hr />
                    </>
                    
                    :<>
                        <div className={special.img ? "special-item-with-img" :"special-item"} key={special.id}>
                        {special.img && <img src={special.img} className='special-img'alt={special.name} />}
                        
                        <div className="special-title-wrapper">
                            <span className={special.img ? 'special-title for-img' : 'special-title'}>{special.name}</span>
                        </div>
                        
                        <span className='special-price'>{special.price}грн</span>
                         </div>
                        <hr />
                    </>
                    


                )
            })}


            </div>
        </seciton>
     );
}
 
export default Specials
