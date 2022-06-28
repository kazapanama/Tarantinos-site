import './ImageList.css'

const ImageList = ({items, idx, title}) => {
    
    return ( 
        
        <section id={idx}>
            <h2 className="menu-category-title">{title}</h2>
            <div className="wrapper">
                 {items && items.map(item=> {
                   
                   return(
                   
                    <div className="item" key={item.id}>
                        <p>{item.name}</p>
                       {item.img && <img src={item.img} alt={item.name}/>} 
                        <p>{item.price}</p>
                        <p>{item.weight}</p>
                        {item.price2 && <p>{item.price2}</p>}
                        {item.weight2 && <p>{item.weight2}</p>}
                        {item.price3 && <p>{item.price3}</p>}
                        {item.weight3 && <p>{item.weight3}</p>}
                    </div>
                    )
                    

                 })}



                 
                 <div className="line" />
            </div>
            
            
        </section>

     );
}
 
export default ImageList;