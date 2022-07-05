import './AboutScreen.css'
import { motion } from 'framer-motion';



const AboutScreen = ({translation}) => {

    
    const animStart = {
        hidden :{
            opacity:0,
            y:50,
        },
    
        visable : custom =>({
            opacity:1,
            y:0,
            transition:{duration:custom*0.4},
        })
    }

    return ( 
        <div className='main-screen2'>
        <motion.h1
         initial='hidden'
         whileInView='visable'
         variants={animStart}
         viewport={{once:true}}
         custom={2}
        >{translation.nav_about}</motion.h1>
        
        </div>

     );
}
 
export default AboutScreen;



