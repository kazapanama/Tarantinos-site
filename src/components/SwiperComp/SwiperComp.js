import { Swiper, SwiperSlide } from "swiper/react";

import {motion} from 'framer-motion'


import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import styles from './SwiperComp.module.css'



// import required modules
import { Pagination , Navigation} from "swiper";



export default function SwiperComp({title}) {
  
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
    >
           
           <Swiper pagination={true} navigation={true} modules={[Navigation,Pagination]} className={styles.smallSwiper}>
        <SwiperSlide><img src="./Images/start/slider-2/1.webp" alt="kapsalon" title="kapsalon"/></SwiperSlide>
        <SwiperSlide><img src="./Images/start/slider-2/2.webp" alt="sandwitches" title="sandwitches"/></SwiperSlide>
        <SwiperSlide><img src="./Images/start/slider-2/3.webp" alt="specials" title="specials"/></SwiperSlide>
        <SwiperSlide><img src="./Images/start/slider-2/4.webp" alt="big and tasty burger" title="big and tasty burger"/></SwiperSlide>
        <SwiperSlide><img src="./Images/start/slider-2/5.webp" alt="cheese fondue" title="cheese fondue"/></SwiperSlide>
        <SwiperSlide><img src="./Images/start/slider-2/6.webp" alt="tarantino`s burger" title="tarantino`s burger"/></SwiperSlide>
        <SwiperSlide><img src="./Images/start/slider-2/7.webp" alt="big burger with cheese fondue" title="big burger with cheese fondue"/></SwiperSlide>
        <SwiperSlide><img src="./Images/start/slider-2/8.webp" alt="double burgers" title="double burgers"/></SwiperSlide>
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
