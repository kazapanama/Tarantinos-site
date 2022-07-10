import './Advantage.css'
import {motion} from 'framer-motion'

const Advantage = ({title,path}) => {


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




    return(
        <div className='Advantage'
        
        >
           
            <motion.img 
            initial='hidden'
            whileInView='visable'
            variants={animStart}
            custom={3}
            viewport={{amount :0.85, once:true}}
            
            src={path} className="advantage-img" alt="advantage img" title="advantage image"/>
            <motion.h3
            initial='hidden'
            whileInView='visable'
            variants={animStart}
            custom={3}
            viewport={{amount :0.85, once:true}}
            
            >{title}</motion.h3>
        </div>
    )
}

export default Advantage