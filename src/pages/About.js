import AboutScreen from '../components/AboutScreen/AboutScreen'
import Advantage from '../components/Advantage/Advantage'
import SwiperComp2 from '../components/SwiperComp2/SwiperComp2'
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
                path='./Images/about-us/about1.webp'
                descr='our team'
                />

            <Advantage 
                title={translation.about_a2}
                path='./Images/about-us/about2.webp'
                descr='jules'
                />

            <motion.div className="bigSection"
            initial='hidden'
            whileInView='visable'
            variants={animStart}
            viewport={{amount :0.2, once:true}}
            custom={3}>
                
                <img className="bigImg" src="./Images/about-us/big.webp" alt="where it all started" title="where it all started" />
                <motion.h3
                initial='hidden'
                whileInView='visable'
                variants={animStart}
                viewport={{amount :0.2, once:true}}
                custom={3}>{translation.about_big}</motion.h3>            
            </motion.div>


            <SwiperComp2 
            title={translation.about_slider}
            />





            <Advantage 
                title={translation.about_a3}
                path='./Images/about-us/about3.webp'
                descr='burger with fries and beer'
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