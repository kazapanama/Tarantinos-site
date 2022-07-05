import './RegularList.css'
import { motion } from 'framer-motion';


const RegularList = ({items, idx, title,currency,unit}) => {
    
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
                    viewport={{amount :0.7, once:true}}
                    custom={2}
                    
                    
                    
                    className="regular-item" key={item.id}>
                        <h3 className="regular-name">{item.name}</h3>
                     
                      <div className="regular-group">
                        <span className="regular-weight">{item.weight}{unit}</span>
                        <span className="regular-price">{item.price}{currency}</span>
                      </div>
                        
                        
                    </motion.div>
                    )
                    

                 })}



                 
                
            </div>
            
            
        </section>

     );
}
 
export default RegularList;