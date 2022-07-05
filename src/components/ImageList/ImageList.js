import './ImageList.css'
import { motion } from 'framer-motion';

const ImageList = ({items, idx, title,currency,unit}) => {
    
    const animStart = {
        hidden :{
            opacity:0,
            y:50,
        },
    
        visable : custom =>({
            opacity:1,
            y:0,
            transition:{duration:custom*0.3},
        })
    }






    return ( 
        
        <section id={idx}>
            <motion.h2 
            initial='hidden'
            whileInView='visable'
            variants={animStart}
            viewport={{once:true}}
            custom={2}
            
            className="menu-category-title">{title}</motion.h2>
            <div className="wrapper">
                 {items && items.map(item=> {
                   
                   return(
                   
                    <motion.div 
                    initial='hidden'
                    whileInView='visable'
                    variants={animStart}
                    viewport={{amount :0.3, once:true}}
                    custom={2}
                    className="list-item" key={item.id}>
                        
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
                        
                    </motion.div>
                    )
                    

                 })}



                 
                 
            </div>
            
            
        </section>

     );
}
 
export default ImageList;