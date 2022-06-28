import './RegularList.css'

const RegularList = ({items, idx, title}) => {
    
    return ( 
        
        <section id={idx}>
            <h2 className="menu-category-title">{title}</h2>
            <div className="wrapper">
                 {items && items.map(item=> {
                   
                   return(
                   
                    <div className="regular-item" key={item.id}>
                        <h3 className="regular-name">{item.name}</h3>
                     
                      <div className="regular-group">
                        <span className="regular-price">{item.price}</span>
                        <span lassName="regular-weight">{item.weight}</span>
                      </div>
                        
                        
                    </div>
                    )
                    

                 })}



                 
                 <div className="line" />
            </div>
            
            
        </section>

     );
}
 
export default RegularList;