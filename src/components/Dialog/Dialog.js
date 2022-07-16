import './Dialog.css'
import {motion} from 'framer-motion'

const Dialog = () => {
    
    const animStart = {
        hidden :{
            opacity:0,
            y:50,
        },
    
        visable : custom =>({
            opacity:1,
            y:0,
            transition:{duration:custom*0.4,delay:custom*0.2},
        })
    }
    
    
    
    
    
    return ( 


        <div className="wrapper">
            <div className="dialog-section">

        <div className="dialog-container-big">
             <motion.img src='./Images/dialoge/d1.webp' alt='dialogue ' title='dialogue image' className='dialog-img-big'
             initial='hidden'
             whileInView='visable'
             variants={animStart}
             viewport={{amount :0.5, once:true}}
             custom={2}
             
             />
        </div>

        <div className="dialog-container">
             <motion.img src='./Images/dialoge/d2.webp' alt='dialogue ' title='dialogue image' className='dialog-img'
             initial='hidden'
             whileInView='visable'
             variants={animStart}
             viewport={{amount :0.5, once:true}}
             custom={2}
             />
             
             
             <motion.img src='./Images/dialoge/d3.webp' alt='dialogue ' title='dialogue image' className='dialog-img'
             initial='hidden'
             whileInView='visable'
             variants={animStart}
             viewport={{amount :0.5, once:true}}
             custom={3}/>
        </div>

        <div className="dialog-container">
             <motion.img src='./Images/dialoge/d4.webp' alt='dialogue ' title='dialogue image' className='dialog-img'
             initial='hidden'
             whileInView='visable'
             variants={animStart}
             viewport={{amount :0.5, once:true}}
             custom={2}
             />


             <motion.img src='./Images/dialoge/d5.webp' alt='dialogue ' title='dialogue image' className='dialog-img'
             initial='hidden'
             whileInView='visable'
             variants={animStart}
             viewport={{amount :0.5, once:true}}
             custom={3}
             />
        </div>

        <div className="dialog-container">
             <motion.img src='./Images/dialoge/d6.webp' alt='dialogue ' title='dialogue image' className='dialog-img'
             initial='hidden'
             whileInView='visable'
             variants={animStart}
             viewport={{amount :0.5, once:true}}
             custom={2}
             />


             <motion.img src='./Images/dialoge/d7.webp' alt='dialogue ' title='dialogue image' className='dialog-img'
             initial='hidden'
             whileInView='visable'
             variants={animStart}
             viewport={{amount :0.5, once:true}}
             custom={3}
             />
        </div>
        





            </div>



        </div>


     );
}
 
export default Dialog;