import { Swiper, SwiperSlide } from "swiper/react";

import {motion} from 'framer-motion'


import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import styles from '../SwiperComp/SwiperComp.module.css'



// import required modules
import { Pagination , Navigation} from "swiper";



export default function SwiperComp2({title}) {
  
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

    <motion.div className='Advantage'
    initial='hidden'
    whileInView='visable'
    variants={animStart}
    custom={3}
    viewport={{amount :0.85, once:true}}   
    tabindex='0'
    >
           
           <Swiper pagination={true} navigation={true} modules={[Navigation,Pagination]} className={styles.smallSwiper}
           >
        <SwiperSlide><img src="./Images/about-us/slider/1.webp" alt="our celebration" title="our celebration"/></SwiperSlide>
        <SwiperSlide><img src="./Images/about-us/slider/2.webp" alt="our celebration №2" title="our celebration №2"/></SwiperSlide>
        <SwiperSlide><img src="./Images/about-us/slider/3.webp" alt="our celebration №3" title="our celebration №3"/></SwiperSlide>
       
        
             </Swiper>
            <motion.h3
            initial='hidden'
            whileInView='visable'
            variants={animStart}
            custom={3}
            viewport={{amount :0.85, once:true}}
            
            >{title}</motion.h3>
        </motion.div>


    
      
    
  );
}
