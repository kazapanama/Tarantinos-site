import AboutScreen from '../components/AboutScreen/AboutScreen'
import Advantage from '../components/Advantage/Advantage'
import Map from '../components/Map/Map'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'


const About = ({translation}) =>{

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
        <>
          <AboutScreen translation={translation}/> 
          <main id='about-us'>
            <div className="wrapper">

            <Advantage 
                title={translation.about_a1}
                path='./Images/about-us/about1.png'
                />

            <Advantage 
                title={translation.about_a2}
                path='./Images/about-us/about2.png'
                />

            <Advantage 
                title={translation.about_a3}
                path='./Images/about-us/about3.png'
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


        <Map />

          </main>
          
        </>
    )
}

export default About