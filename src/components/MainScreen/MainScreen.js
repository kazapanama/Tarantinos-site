import './MainScreen.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


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

const MainScreen = ({translation}) => {
    return(
        <div className='main-screen'>
            <motion.h1
            initial="hidden"
            whileInView="visable"
            custom={3}
            variants={animStart}
            viewport={{once:true}}
            >{translation.main_title}</motion.h1>
            
            <Link to="/menu" className="main-screen-href"
            >{translation.main_button}</Link>
        </div>
    )
}

export default MainScreen