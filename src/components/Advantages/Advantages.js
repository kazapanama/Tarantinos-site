import './Advantages.css'
import '../MainScreen/MainScreen.css'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'

import Advantage from '../Advantage/Advantage'

const Advantages = ({translation}) => {

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





    return(
        <section id='advantages'>
            <div className="wrapper">
                <motion.h2
                initial='hidden'
                whileInView='visable'
                variants={animStart}
                viewport={{amount :0.2, once:true}}
                custom={1}><strong>{translation.main_name}</strong>{translation.main_is}</motion.h2>
                
                <Advantage 
                title={translation.main_a1}
                path='./Images/start/Advantage1.jpg'
                />

                <Advantage 
                title={translation.main_a2}
                path='./Images/start/Advantage2.jpg'
                />

                <Advantage 
                title={translation.main_a3}
                path='./Images/start/Advantage3.jpg'
                />

                <Advantage 
                title={translation.main_a4}
                path='./Images/start/Advantage4.jpg'
                />

                <Advantage 
                title={translation.main_a5}
                path='./Images/start/Advantage5.jpg'
                />

              
                
                <motion.div
                initial='hidden'
                whileInView='visable'
                variants={animStart}
                viewport={{amount :0.2, once:true}}
                custom={3}
                
                className="start-berore-map">
                    <h2>{translation.main_prebutton}</h2>
                     <Link to="/menu" className="main-screen-href">{translation.main_button}</Link>
                </motion.div>
                


            </div>
        </section>
   
        )

}

export default Advantages