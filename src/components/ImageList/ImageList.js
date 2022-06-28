import './ImageList.css'

const ImageList = ({items, idx, title,currency,unit}) => {
    
    return ( 
        
        <section id={idx}>
            <h2 className="menu-category-title">{title}</h2>
            <div className="wrapper">
                 {items && items.map(item=> {
                   
                   return(
                   
                    <div className="list-item" key={item.id}>
                        
                       {item.img && 
                       
                        <img src={item.img} alt={item.name} className="list-img"/>
                       } 
                        <div className="list-info">
                            <h3 className="list-name">{item.name}</h3>
                           {item.ingredients && <span className="list-descr">{item.ingredients}</span>} 
                            <div className="list-group">
                                <span className="list-weight">{item.weight}{unit}</span>
                                <span className="list-price">{item.price}{currency}</span>
                            </div>
                            
                            {item.price2 && 
                            <div className="list-group">
                                <span className="list-weight">{item.weight2}{unit}</span>
                                <span className="list-price">{item.price2}{currency}</span>
                            </div>}

                            
                            {item.price3 && 
                            <div className="list-group">
                                <span className="list-weight">{item.weight3}{unit}</span>
                                <span className="list-price">{item.price3}{currency}</span>
                            </div>}
                            
                        </div>
                        
                    </div>
                    )
                    

                 })}



                 
                 
            </div>
            
            
        </section>

     );
}
 
export default ImageList;