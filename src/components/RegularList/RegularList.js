import './RegularList.css'

const RegularList = ({items, idx, title,currency,unit}) => {
    
    return ( 
        
        <section id={idx}>
            <h2 className="menu-category-title">{title}</h2>
            <div className="wrapper">
                 {items && items.map(item=> {
                   
                   return(
                   
                    <div className="regular-item" key={item.id}>
                        <h3 className="regular-name">{item.name}</h3>
                     
                      <div className="regular-group">
                        <span className="regular-weight">{item.weight}{unit}</span>
                        <span className="regular-price">{item.price}{currency}</span>
                      </div>
                        
                        
                    </div>
                    )
                    

                 })}



                 
                
            </div>
            
            
        </section>

     );
}
 
export default RegularList;