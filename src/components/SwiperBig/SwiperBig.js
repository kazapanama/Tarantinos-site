import styles from './SwiperBig.module.css'

import { Swiper, SwiperSlide } from "swiper/react";

import {motion} from 'framer-motion'


import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';




// import required modules
import { Pagination , Navigation} from "swiper";


const SwiperBig = ({title}) => {
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

    <motion.div className={styles.bigImg}
    // initial='hidden'
    whileInView='visable'
    variants={animStart}
    custom={3}
    viewport={{once:true}}    
    >
           
           <Swiper pagination={true} navigation={true} modules={[Navigation,Pagination]} className={styles.bigSwiper}>
        <SwiperSlide><img src="./Images/about-us/big.webp" alt="kwhere it all started" title="where it all started"/></SwiperSlide>
        <SwiperSlide><img src="./Images/about-us/big2.webp" alt="our aniversary" title="our aniversary"/></SwiperSlide>
       
             </Swiper>
            <motion.h3
            className={styles.bigImgtext}
            initial='hidden'
            whileInView='visable'
            variants={animStart}
            custom={3}
            viewport={{once:true}}
            
            >{title}</motion.h3>
        </motion.div>


    
      
    
  );
}

export default SwiperBig