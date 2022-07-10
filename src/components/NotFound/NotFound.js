import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

import './NotFound.css'



const NotFound = ({translation}) => {
    console.log(translation)
    const animStart = {
        hidden :{
            opacity:0,
            y:50,
        },
    
        visable : custom =>({
            opacity:1,
            y:0,
            transition:{duration:custom*0.2},
        })
    }

    
    return ( 



        <div className='not-found'>
            <motion.h1
            initial="hidden"
            whileInView="visable"
            custom={3}
            variants={animStart}
            viewport={{once:true}}
            >{translation.not_found_title}</motion.h1>
            
            <Link to="/menu" className="main-screen-href"
            >{translation.not_found_button}</Link>
        </div>



     );
}
 
export default NotFound;