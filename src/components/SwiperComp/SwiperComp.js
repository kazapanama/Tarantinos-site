import { Swiper, SwiperSlide } from "swiper/react";

import {motion} from 'framer-motion'


import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import './SwiperComp.css'



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
           
           <Swiper pagination={true} navigation={true} modules={[Navigation,Pagination]} className="mySwiper">
        <SwiperSlide><img src="./Images/start/slider/1.jpg" alt="advantage img" title="advantage image"/></SwiperSlide>
        <SwiperSlide><img src="./Images/start/slider/2.jpg" alt="advantage img" title="advantage image"/></SwiperSlide>
        <SwiperSlide><img src="./Images/start/slider/3.jpg" alt="advantage img" title="advantage image"/></SwiperSlide>
        <SwiperSlide><img src="./Images/start/slider/4.jpg" alt="advantage img" title="advantage image"/></SwiperSlide>
        <SwiperSlide><img src="./Images/start/slider/5.jpg" alt="advantage img" title="advantage image"/></SwiperSlide>
        <SwiperSlide><img src="./Images/start/slider/6.jpg" alt="advantage img" title="advantage image"/></SwiperSlide>
        <SwiperSlide><img src="./Images/start/slider/7.jpg" alt="advantage img" title="advantage image"/></SwiperSlide>
        <SwiperSlide><img src="./Images/start/slider/8.jpg" alt="advantage img" title="advantage image"/></SwiperSlide>
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
