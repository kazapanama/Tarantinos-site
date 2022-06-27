import './Burgers.css'

const Burgers = ({menu}) => {
   const {burgers} = menu
    
   
   
   return ( 
        <section id="burgers">
           <div className="wrapper">
             <h2 className='burges-title'>Бургери</h2>
                
                
                {burgers && burgers.map(burger => {
                   
                   
                   return (                
                    <div className='burger-item'>
                        <img src={burger.img} alt={burger.name} className='burger-img'/>
                        <h2>{burger.name}</h2>
                        <p>{burger.ingredients}</p>
                        <div className='burger-item-info'>
                            
                            
                            <div className='burger-item-price'>
                             <span>{burger.price1}грн</span>
                             <span>{burger.weight1}г</span>
                            </div>
                            


                            {burger.price2 && <div className='burger-item-price'>
                             <span>{burger.price2}грн</span>
                             <span>{burger.weight2}г</span>
                            </div>}
                           
                            {burger.price3 && <div className='burger-item-price'>
                             <span>{burger.price3}грн</span>
                             <span>{burger.weight3}г</span>
                            </div>}
                            
                            
                           
                            <hr />
                            
                            
                        </div>
                        
                    </div>
                )
                        
                    })}



           </div>
           

        </section>
     );
}
 
export default Burgers;